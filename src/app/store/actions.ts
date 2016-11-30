import { Action } from '@ngrx/store';
import { actionType } from '../utils';
import {
    User,
    Partner,
    Member,
    Contact,
    ContactDetail,
    Referral,
    ReferralDetail,
 } from './state';

export const TYPES = {
    SET_USER: actionType('SetUser'),
    LOAD_PARTNERS: actionType('LoadPartners'),
    LOAD_MEMBERS: actionType('LoadMembers'),
    LOAD_CONTACTS: actionType('LoadContacts'),
    SET_CONTACT_DETAIL: actionType('SetContactDetail'),
    LOAD_REFERRALS: actionType('LoadReferrals'),
    SET_REFERRAL_DETAIL: actionType('SetReferralDetail'),
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

export class LoadReferralsAction implements Action {
    type = TYPES.LOAD_REFERRALS;
    constructor(public payload: Referral[]) {}
}

export class SetReferralDetailAction implements Action {
    type = TYPES.SET_REFERRAL_DETAIL;
    constructor(public payload: ReferralDetail) {}
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

export type ReferralsAction
    = LoadReferralsAction
    | SetUserAction;

export type ReferralDetailsAction
    = SetReferralDetailAction

export type UserAction
    = SetUserAction;