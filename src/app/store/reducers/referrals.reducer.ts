import { Referral } from '../../firebase/';
import * as ACTIONS from '../actions';

const INITIAL_STATE: Referral[] = [];

export function referralsReducer(state = INITIAL_STATE, action: ACTIONS.ReferralsAction) {

    switch (action.type) {

        case ACTIONS.TYPES.SET_USER: {
            return action.payload === undefined ? INITIAL_STATE : state;
        }

        case ACTIONS.TYPES.LOAD_REFERRALS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}