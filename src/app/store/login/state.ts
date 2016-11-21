/**
 * NOTE: The admin flag is set here so the front-end will show admin screens as appropriate.
 * However, the admin functions are actually locked down in the Firebase using server-size
 * security.  Hacking this flag locally would show the screens but still wouldn't enable
 * administrator functionality.
 */

export interface LoginProfile {
    displayName: string;
    email: string;
    emailVerified: boolean;
    photoURL: string;
    uid: string;
}

export interface LoginState {
    profile?: LoginProfile,
    admin: boolean,
}

export const initialState: LoginState = {
    admin: false,
}