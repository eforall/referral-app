import { initialState } from './state';
import { ACTIONS, LoginAction } from '../actions';

export function loginReducer(state = initialState, action: LoginAction) {

    switch (action.type) {

        case ACTIONS.SET_ADMIN: {
            return Object.assign({}, state, { adminn: action.payload });
        }

        default: {
            return state;
        }
    }
}