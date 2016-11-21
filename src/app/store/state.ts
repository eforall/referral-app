export { LoginProfile } from  './login/state';
export { Partner, User, Contact } from './players/state';

import { LoginState } from './login/state';
import { PlayersState } from './players/state';

export interface AppState {
    login: LoginState,
    players: PlayersState,
}