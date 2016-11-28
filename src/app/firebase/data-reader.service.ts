/**
 * NOTE: This app currently loads ALL of the partners, members and contacts.  This was a design
 * choice to help keep the project within budget.  This is OK because the use is expected to
 * be fairly low.  If the application use grows then it is recommended to adjust this to load
 * what is needed on demand.
 */

import 'rxjs/rx';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

import { Partner } from './partner';
import { Member } from './member';
import { Contact, ContactDetail } from './contact';
import { StoreService } from '../store/store.service';



@Injectable()
export class DataReaderService {

  private partners: Observable<Partner[]>;
  private contactDetails: any = {};

  constructor(private af: AngularFire,
              private store: StoreService) {

    this.store.select(store => store.user).subscribe((user) => {
      if (user) this.loadData();
    });
  }

  private loadData() {
    if (this.partners) return;  //Skip if already loaded

    this.loadPartners();
    this.loadMembers();
    this.loadContacts();
  }

  private loadPartners() {
    this.partners = this.af.database.list("/partners",  { query: { orderByChild: 'name' } })
      .map((partners: any[]) => {
        return partners.reduce((list, p) => { return [...list, { pid: p.$key, name: p.name }]; }, []);
      });

    this.partners.subscribe(partners => this.store.loadPartners(partners));
  }


  private loadMembers() {
    let members = Observable.combineLatest(
      this.partners,
      this.af.database.list("/members"), 
      this.af.database.object("/access"),
      (partners: Partner[], members: Member[], access: any) => {

        this.matchMembersToPartners(partners, members, access);
        return members;

      });
    
    members.subscribe(members => this.store.loadMembers(members));
  }


  /**
   * Lookup the member's UID in the access tree to get their partner PID (if there is one)
   * Then, ensure that there is actually a partner with that PID.  If so, assign it to the member object.
   */
  private matchMembersToPartners(partners: Partner[], members: Member[], access: any) {
    let partnerMap = partners.reduce((map, partner) => {map[partner.pid] = partner.name; return map;}, {});
    for (let member of members) {
      delete member.pid;
      let a = access[member.uid];
      if (a) {
        let p = partnerMap[a.pid];
        if (p) {
          member.pid = a.pid;
        }
      }
    }
  }


  private loadContacts() {
    let contacts = this.af.database.list("/contacts",  { query: { orderByChild: 'name' } })
      .map((contacts: any[]) => {
        return contacts.reduce((list, c) => { return [...list, { cid: c.$key, name: c.name, business: c.business }]; }, []);
      });

    contacts.subscribe(contacts => this.store.loadContacts(contacts));
  }


  public loadContactDetail(cid: string) {
    if (this.contactDetails[cid] === undefined) {
      this.contactDetails[cid] = this.af.database.list("/contact-details/" + cid).subscribe((contactDetails: ContactDetail[]) => {

        let cd: ContactDetail = {
          cid,
          name: "",
          business: "",
          email: "",
          phone: "",
          contactMethod: "",
          language: "",
          gender: "",
          race: "",
          website: "",
          businessStatus: "",
          address: "",
          immigrant: false,
          nonNativeEnglish: false,
          lowIncome: false,
          wasUnemployed: false,
          veteran: false,
        };
        
        //
        // Merge the individual audit records into one current set of details
        //
        cd = contactDetails.reduce((previous, current) => {
          return Object.assign(current, previous);
        }, cd);

        this.store.contactDetail(cd);
      });
    }
  }
}
