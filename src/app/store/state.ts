import { User, Partner, Member, Contact } from '../firebase';
export { User, Partner, Member, Contact } from '../firebase';

export interface AppState {
    user: User;
    partners: Partner[],
    members: Member[],
    contacts: Contact[],
}