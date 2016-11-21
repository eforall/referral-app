import { Partner, User, Contact, initialState } from './state';
import { ACTIONS, PlayersAction } from '../actions';

export function playersReducer(state = initialState, action: PlayersAction) {

    switch (action.type) {

        case ACTIONS.RESET_LOGIN: {
            return initialState;
        }

        case ACTIONS.UPDATE_PARTNERS: {
            return Object.assign({}, state, { partners: action.payload });
        }

        case ACTIONS.UPDATE_USERS: {
            return Object.assign({}, state, { users: action.payload });
        }

        case ACTIONS.UPDATE_CONTACTS: {
            return Object.assign({}, state, { contacts: action.payload });
        }

        default: {
            return state;
        }
    }
}