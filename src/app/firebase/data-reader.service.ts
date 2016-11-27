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

import { AuthService } from './auth.service';

import { Partner } from './partner';
import { Member } from './member';
import { Contact } from './contact';
import { StoreService } from '../store/store.service';



@Injectable()
export class DataReaderService {

  private partners: Observable<Partner[]>;
  private members:  Observable<Member[]>;

  constructor(private af: AngularFire,
              private auth: AuthService,
              private store: StoreService) {

    this.auth.user.subscribe((user) => {
      if (user) this.loadData();
    });
  }

  private loadData() {
    if (this.partners) return;  //Skip if already loaded

    this.loadPartners();
    this.loadMembers();
  }

  private loadPartners() {
    this.partners = this.af.database.list("/partners",  { query: { orderByChild: 'name' } })
      .map((partners: any[]) => {
        return partners.reduce((list, p) => { return [...list, { pid: p.$key, name: p.name }]; }, []);
      });

    this.partners.subscribe(partners => this.store.loadPartners(partners));
  }


  private loadMembers() {
    this.members = Observable.combineLatest(
      this.partners,
      this.af.database.list("/members"), 
      this.af.database.object("/access"),
      (partners: Partner[], members: Member[], access: any) => {

        this.matchMembersToPartners(partners, members, access);
        return members;

      });
    
    this.members.subscribe(members => this.store.loadMembers(members));
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
          console.log("a.pid", a.pid);
          member.pid = a.pid;
        }
      }
    }
  }

}
