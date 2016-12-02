import { ReferralDetails, ReferralDetail } from '../../firebase/';
import * as ACTIONS from '../actions';

const INITIAL_STATE: ReferralDetails = {};

export function referralDetailsReducer(state = INITIAL_STATE, action: ACTIONS.ReferralDetailsAction) {

    switch (action.type) {

        case ACTIONS.TYPES.SET_REFERRAL_DETAIL: {
            let newState: ReferralDetails = {};
            newState[action.payload.rid] = action.payload;
            let x = Object.assign({}, state, newState);
            return x;
        }

        default: {
            return state;
        }
    }
}