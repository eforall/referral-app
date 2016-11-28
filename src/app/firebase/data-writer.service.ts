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
  uid: string;

  constructor(private af: AngularFire, private store: StoreService) {
    this.partners = this.af.database.list("/partners");
    store.select(store => store.user).subscribe(user => this.uid = user? user.uid : undefined);
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

    let key = this.af.database.list("/contacts").push({name, business}).key;
    this.af.database.list("/contact-data").push({
      uid: this.uid,
      timestamp: TIMESTAMP,
      name,
      business
    });

    return key;
  }

}
