import { Partner, Member, Contact } from '../../firebase/';
import * as ACTIONS from '../actions';

const INITIAL_STATE: Contact[] = [];

export function contactsReducer(state = INITIAL_STATE, action: ACTIONS.ContactsAction) {

    switch (action.type) {

        case ACTIONS.TYPES.RESET_LOGIN: {
            return INITIAL_STATE;
        }

        case ACTIONS.TYPES.UPDATE_CONTACTS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}