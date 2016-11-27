import { Partner } from '../../firebase/';
import * as ACTIONS from '../actions';

const INITIAL_STATE: Partner[] = [];

export function partnersReducer(state = INITIAL_STATE, action: ACTIONS.PartnersAction) {

    switch (action.type) {

        case ACTIONS.TYPES.SET_USER: {
            return action.payload === undefined ? INITIAL_STATE : state;
        }

        case ACTIONS.TYPES.LOAD_PARTNERS: {
            return action.payload;
        }

        default: {
            return state;
        }
    }
}