export { LoginProfile } from  './login/state';

import { Partner, Member, Contact } from '../firebase';
export { Partner, Member, Contact } from '../firebase';

import { LoginState } from './login/state';

export interface AppState {
    login: LoginState,
    partners: Partner[],
    members: Member[],
    contacts: Contact[],
}