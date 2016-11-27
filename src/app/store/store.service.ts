import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state';
import * as ACTIONS from './actions';
import * as FIREBASE from '../firebase/';


@Injectable()
export class StoreService {

  constructor(private store: Store<AppState>) {}

  select(path: any) {
      return this.store.select(path);
  }

  loadPartners(partners: FIREBASE.Partner[]) {
      this.store.dispatch(new ACTIONS.LoadPartnersAction(partners));
  }
  loadMembers(members: FIREBASE.Member[]) {
      this.store.dispatch(new ACTIONS.LoadMembersAction(members));
  }
  loadContacts(contacts: FIREBASE.Contact[]) {
      this.store.dispatch(new ACTIONS.LoadContactsAction(contacts));
  }

}
