import { User } from '../../firebase/';
import * as ACTIONS from '../actions';

const INITIAL_STATE: User = undefined;

export function userReducer(state = INITIAL_STATE, action: ACTIONS.UserAction) {

    switch (action.type) {

        case ACTIONS.TYPES.SET_USER: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}