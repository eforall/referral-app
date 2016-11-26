import 'rxjs/rx';

import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

import { Partner } from './partner';
import { Member } from './member';

import { Store } from '@ngrx/store';
import { AppState } from '../store/state';
import * as ACTIONS from '../store/actions';


@Injectable()
export class DataReaderService {

  private partners: Observable<Partner[]>;
  private members:  Observable<Member[]>;

  constructor(private af: AngularFire,
              private auth: AuthService,
              private store: Store<AppState>) {
    this.auth.user.subscribe((user) => {
      if (user) this.loadData();
    });
  }

  private loadData() {
    console.log("loadData!");
    if (this.partners) return;  //Skip if already loaded

    this.loadPartners();
    this.loadMembers();
  }

  private loadPartners() {
    this.partners = this.af.database.list("/partners",  { query: { orderByChild: 'name' } })
      .map((partners: any[]) => {
        return partners.reduce((list, p) => { return [...list, { pid: p.$key, name: p.name }]; }, []);
      });

    this.partners.subscribe(partners => this.store.dispatch(new ACTIONS.UpdatePartnersAction(partners)));
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
    
    this.members.subscribe(members => console.log("MEMBERS", members));
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
