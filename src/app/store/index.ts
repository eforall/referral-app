
/**
 * Angular Redux goodness!  This app keeps all of it's state in a single store which
 * is changed only through pure-function reducers. See https://github.com/ngrx/store
 */

import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../environments/environment';
import { compose } from '@ngrx/core/compose';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { AppState } from './state';
export { AppState } from './state';

export { StoreService } from './store.service';

/*** Reducers ***/
import { userReducer } from './reducers/user.reducer';
import { partnersReducer } from './reducers/partners.reducer';
import { membersReducer } from './reducers/members.reducer';
import { contactsReducer } from './reducers/contacts.reducer';
import { contactDetailsReducer } from './reducers/contact-details.reducer';
import { referralsReducer } from './reducers/referrals.reducer';
import { referralDetailsReducer } from './reducers/referral-details.reducer';

const reducers = {
  user: userReducer,
  partners: partnersReducer,
  members: membersReducer,
  contacts: contactsReducer,
  contactDetails: contactDetailsReducer,
  referrals: referralsReducer,
  referralDetails: referralDetailsReducer,
}


const developmentReducer: ActionReducer<AppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<AppState> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  //if (environment.production) return productionReducer(state, action);
  //else return developmentReducer(state, action);

  return productionReducer(state, action);
}