import { Action } from '@ngrx/store';
import { actionType } from '../utils';
import { User, Partner, Member, Contact } from './state';

export const TYPES = {
    SET_USER: actionType('SetUser'),
    LOAD_PARTNERS: actionType('LoadPartners'),
    LOAD_MEMBERS: actionType('LoadMembers'),
    LOAD_CONTACTS: actionType('LoadContacts'),
}


export class SetUserAction implements Action {
    type = TYPES.SET_USER;
    constructor(public payload?: User) {}
}

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


export type PartnersAction
    = LoadPartnersAction
    | SetUserAction;

export type MembersAction
    = LoadMembersAction
    | SetUserAction;

export type ContactsAction
    = LoadContactsAction
    | SetUserAction;

export type UserAction
    = SetUserAction;