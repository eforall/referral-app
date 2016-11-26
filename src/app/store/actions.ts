import { Action } from '@ngrx/store';
import { actionType } from '../utils';
import { LoginProfile, Partner, User, Contact } from './state';

export const ACTIONS = {
    //Login actions
    SET_LOGIN: actionType('[SetLoginAction]'),
    SET_ADMIN: actionType('[SetAdminAction]'),
    RESET_LOGIN: actionType('[ResetLoginAction]'),

    //Partner actions
    UPDATE_PARTNERS: actionType('[UpdatePartnersAction]'),
    UPDATE_USERS: actionType('[UpdateUsersAction]'),
    UPDATE_CONTACTS: actionType('[UpdateContactsAction]'),
}


/**
 * Players
 */

export class UpdatePartnersAction implements Action {
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


/**
 * Login
 */

export class SetLoginAction implements Action {
    type = ACTIONS.SET_LOGIN;
    constructor(public payload: LoginProfile) {}
}

export class SetAdminAction implements Action {
    type = ACTIONS.SET_ADMIN;
    constructor(public payload: boolean) {}
}

export class ResetLoginAction implements Action {
    type = ACTIONS.RESET_LOGIN;
    public payload = undefined;  //unused
    constructor() {}
}



export type PlayersAction
    = UpdatePartnersAction
    | UpdateUsersAction
    | UpdateContactsAction
    | ResetLoginAction;

export type LoginAction
    = SetLoginAction
    | SetAdminAction
    | ResetLoginAction;