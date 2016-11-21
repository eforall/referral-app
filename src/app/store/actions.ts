import { Action } from '@ngrx/store';
import { actionType } from '../utils';
import { Partner, User, Contact } from './state';

export const ACTIONS = {
    UPDATE_PARTNERS: actionType('[UpdatePartnersAction]'),
    UPDATE_USERS: actionType('[UpdateUsersAction]'),
    UPDATE_CONTACTS: actionType('[UpdateContactsAction]'),
    SET_ADMIN: actionType('[SetAdminAction]'),
}


/**
 * Players
 */

export class UpdatePlayersAction implements Action {
    type = ACTIONS.UPDATE_PARTNERS;
    constructor(public payload: Partner[]) {}
}

export class UpdateUsersAction implements Action {
    type = ACTIONS.UPDATE_USERS;
    constructor(public payload: User[]) {}
}

export class UpdateContactsAction implements Action {
    type = ACTIONS.UPDATE_CONTACTS;
    constructor(public payload: Contact[]) {}
}

export type PlayersAction
    = UpdatePlayersAction
    | UpdateUsersAction
    | UpdateContactsAction;



/**
 * Login
 */

export class SetAdminAction implements Action {
    type = ACTIONS.SET_ADMIN;
    constructor(public payload: boolean) {}
}

export type LoginAction
    = SetAdminAction;