/**
 * NOTE: The admin flag is set here so the front-end will show admin screens as appropriate.
 * However, the admin functions are actually locked down in the Firebase using server-side
 * security.  Hacking this flag locally would show the screens but still wouldn't enable
 * administrator functionality.
 */

export interface User {
    displayName: string;
    email: string;
    emailVerified: boolean;
    photoURL: string;
    uid: string;
    partner: string;
    admin: boolean;
}