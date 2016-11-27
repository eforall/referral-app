import { Action } from '@ngrx/store';
import { actionType } from '../utils';
import { LoginProfile, Partner, Member, Contact } from './state';

export const TYPES = {
    SET_LOGIN: actionType('[SetLoginAction]'),
    SET_ADMIN: actionType('[SetAdminAction]'),
    RESET_LOGIN: actionType('[ResetLoginAction]'),

    LOAD_PARTNERS: actionType('[LoadPartnersAction]'),
    LOAD_MEMBERS: actionType('[LoadMembersAction]'),
    LOAD_CONTACTS: actionType('[LoadContactsAction]'),
}


/**
 * Players
 */

export class LoadPartnersAction implements Action {
    type = TYPES.LOAD_PARTNERS;
    constructor(public payload: Partner[]) {}
}

export class LoadMembersAction implements Action {
    type = TYPES.LOAD_MEMBERS;
    constructor(public payload: Member[]) {}
}

export class LoadContactsAction implements Action {
    type = TYPES.LOAD_CONTACTS;
    constructor(public payload: Contact[]) {}
}


/**
 * Login
 */

export class SetLoginAction implements Action {
    type = TYPES.SET_LOGIN;
    constructor(public payload: LoginProfile) {}
}

export class SetAdminAction implements Action {
    type = TYPES.SET_ADMIN;
    constructor(public payload: boolean) {}
}

export class ResetLoginAction implements Action {
    type = TYPES.RESET_LOGIN;
    public payload = undefined;  //unused
    constructor() {}
}



export type PartnersAction
    = LoadPartnersAction
    | ResetLoginAction;

export type MembersAction
    = LoadMembersAction
    | ResetLoginAction;

export type ContactsAction
    = LoadContactsAction
    | ResetLoginAction;

export type LoginAction
    = SetLoginAction
    | SetAdminAction
    | ResetLoginAction;