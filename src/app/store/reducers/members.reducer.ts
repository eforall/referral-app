import { Member } from '../../firebase/';
import * as ACTIONS from '../actions';

const INITIAL_STATE: Member[] = [];

export function membersReducer(state = INITIAL_STATE, action: ACTIONS.MembersAction) {

    switch (action.type) {

        case ACTIONS.TYPES.SET_USER: {
            return action.payload === undefined ? INITIAL_STATE : state;
        }

        case ACTIONS.TYPES.LOAD_MEMBERS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}