import {
    User, Partner, Member,
    Contact, ContactDetail, ContactDetails,
    Referral, ReferralDetail, ReferralDetails,
 } from '../firebase';

export {
    User, Partner, Member,
    Contact, ContactDetail, ContactDetails,
    Referral, ReferralDetail, ReferralDetails,
 } from '../firebase';

export interface AppState {
    user: User;
    partners: Partner[],
    members: Member[],
    contacts: Contact[],
    contactDetails: ContactDetails,
    referrals: Referral[],
    referralDetails: ReferralDetails,
}