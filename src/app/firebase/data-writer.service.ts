import 'rxjs/rx';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
//import * as firebase from 'firebase';

import { Partner } from './partner';
import { Member } from './member';
import { StoreService } from '../store/store.service';

//Need to hard code the timestamp placeholder because the firebase3.d.ts file doesn't have it!
//When we can, this should be removed and instead use firebase.database.ServerValue.TIMESTAMP 
const TIMESTAMP = {".sv":"timestamp"};

@Injectable()
export class DataWriterService {

  partners: FirebaseListObservable<any>;

  //
  // Cached copies of the user id and partner id of the currently logged in user
  //
  uid: string;
  pid: string;

  constructor(private af: AngularFire, private store: StoreService) {
    this.partners = this.af.database.list("/partners");
    store.select(store => store.user).subscribe(user => {
      this.uid = user? user.uid : undefined;
      this.pid = user? user.pid : undefined;
    });
  }

  addPartner(name: string) {
    this.partners.push({name});
  }
  
  updateMemberPartner(uid: string, pid: string) {
    if (pid == '') pid = null;
    this.af.database.object("/access/" + uid + "/pid").set(pid);
  }

  addContact(name: string, business: string) {
    if (this.uid === undefined) return "";

    let contact = {
      uid: this.uid,
      timestamp: TIMESTAMP,
      name,
      business
    };

    let key = this.af.database.list("/contacts").push(contact).key;   //current state
    this.af.database.list("/contact-details/" + key).push(contact);   //first audit record

    return key;
  }

  editContact(cid: string, newDetail: any) {
    //
    // Add an audit entry
    //
    this.af.database.list("/contact-details/" + cid).push(
      Object.assign({}, newDetail, { uid: this.uid, timestamp: TIMESTAMP})
    );

    //
    // Update the index entry when the name and business changes
    //
    let name = newDetail["name"];
    let business = newDetail["business"];
    if (name !== undefined || business !== undefined) {
      let contactEntry: any = {};
      if (name !== undefined) contactEntry.name = name;
      if (business !== undefined) contactEntry.business = business;
      this.af.database.object("/contacts/" + cid).update(contactEntry);
    }
  }

  addReferral(cid: string, pid: string) {
    let referral = {
      cid,                  //contact being referred
      from_uid: this.uid,   //current user
      from_pid: this.pid,   //partner of current user
      to_pid: pid,          //partner being referred to
      status: "open",
      timestamp: TIMESTAMP,
    };

    let key = this.af.database.list("/referrals").push(referral).key;   //current state
    this.af.database.list("/referral-details/" + key).push(referral);   //first audit record

    return key;
  }

}
