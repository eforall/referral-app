import { initialState } from './state';
import { ACTIONS, LoginAction } from '../actions';

export function loginReducer(state = initialState, action: LoginAction) {

    switch (action.type) {

        case ACTIONS.SET_LOGIN: {
            return Object.assign({}, state, { profile: action.payload });
        }

        case ACTIONS.SET_ADMIN: {
            return Object.assign({}, state, { admin: action.payload });
        }

        case ACTIONS.RESET_LOGIN: {
            return Object.assign({}, state, { profile: undefined });
        }

        default: {
            return state;
        }
    }
}