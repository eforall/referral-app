import { Partner, Member, Contact } from '../../firebase/';
import * as ACTIONS from '../actions';

const INITIAL_STATE: Partner[] = [];

export function partnersReducer(state = INITIAL_STATE, action: ACTIONS.PartnersAction) {

    switch (action.type) {

        case ACTIONS.TYPES.RESET_LOGIN: {
            return INITIAL_STATE;
        }

        case ACTIONS.TYPES.UPDATE_PARTNERS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}