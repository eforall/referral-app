import { Partner, Member, Contact } from '../../firebase/';
import * as ACTIONS from '../actions';

const INITIAL_STATE: Member[] = [];

export function membersReducer(state = INITIAL_STATE, action: ACTIONS.MembersAction) {

    switch (action.type) {

        case ACTIONS.TYPES.RESET_LOGIN: {
            return INITIAL_STATE;
        }

        case ACTIONS.TYPES.LOAD_MEMBERS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}