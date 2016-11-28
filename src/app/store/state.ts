import { User, Partner, Member, Contact, ContactDetail, ContactDetails } from '../firebase';
export { User, Partner, Member, Contact, ContactDetail, ContactDetails } from '../firebase';

export interface AppState {
    user: User;
    partners: Partner[],
    members: Member[],
    contacts: Contact[],
    contactDetails: ContactDetails,
}