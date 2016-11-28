import { ContactDetails, ContactDetail } from '../../firebase/';
import * as ACTIONS from '../actions';

const INITIAL_STATE: ContactDetails = {};

export function contactDetailsReducer(state = INITIAL_STATE, action: ACTIONS.ContactDetailsAction) {

    switch (action.type) {

        case ACTIONS.TYPES.SET_CONTACT_DETAIL: {
            let newState: ContactDetails = {};
            newState[action.payload.cid] = action.payload;
            return Object.assign({}, state, newState);
        }

        default: {
            return state;
        }
    }
}