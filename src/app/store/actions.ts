import { Action } from '@ngrx/store';
import { actionType } from '../utils';
import { User, Partner, Member, Contact, ContactDetail } from './state';

export const TYPES = {
    SET_USER: actionType('SetUser'),
    LOAD_PARTNERS: actionType('LoadPartners'),
    LOAD_MEMBERS: actionType('LoadMembers'),
    LOAD_CONTACTS: actionType('LoadContacts'),
    SET_CONTACT_DETAIL: actionType('SetContactDetail'),
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

export class SetContactDetailAction implements Action {
    type = TYPES.SET_CONTACT_DETAIL;
    constructor(public payload: ContactDetail) {}
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

export type ContactDetailsAction
    = SetContactDetailAction

export type UserAction
    = SetUserAction;