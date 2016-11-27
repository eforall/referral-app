import { Partner, Member, Contact } from '../../firebase/';
import * as ACTIONS from '../actions';

const INITIAL_STATE: Contact[] = [];

export function contactsReducer(state = INITIAL_STATE, action: ACTIONS.ContactsAction) {

    switch (action.type) {

        case ACTIONS.TYPES.SET_USER: {
            return action.payload === undefined ? INITIAL_STATE : state;
        }

        case ACTIONS.TYPES.LOAD_CONTACTS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}