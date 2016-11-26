import { initialState } from './state';
import * as ACTIONS from '../actions';

export function loginReducer(state = initialState, action: ACTIONS.LoginAction) {

    switch (action.type) {

        case ACTIONS.TYPES.SET_LOGIN: {
            return Object.assign({}, state, { profile: action.payload });
        }

        case ACTIONS.TYPES.SET_ADMIN: {
            return Object.assign({}, state, { admin: action.payload });
        }

        case ACTIONS.TYPES.RESET_LOGIN: {
            return Object.assign({}, state, { profile: undefined });
        }

        default: {
            return state;
        }
    }
}