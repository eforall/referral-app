import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state';
import * as ACTIONS from './actions';
import * as FIREBASE from '../firebase/';


@Injectable()
export class StoreService {

  constructor(private store: Store<AppState>) {}

  select = this.store.select;

  setUser(user: FIREBASE.User) {
      this.store.dispatch(new ACTIONS.SetUserAction(user));
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
  contactDetail(contactDetail: FIREBASE.ContactDetail) {
      this.store.dispatch(new ACTIONS.SetContactDetailAction(contactDetail));
  }
  loadReferrals(referrals: FIREBASE.Referral[]) {
      this.store.dispatch(new ACTIONS.LoadReferralsAction(referrals));
  }
  referralDetail(referralDetail: FIREBASE.ReferralDetail) {
      this.store.dispatch(new ACTIONS.SetReferralDetailAction(referralDetail));
  }
}
