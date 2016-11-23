/**
 * NOTE: The admin flag is set here so the front-end will show admin screens as appropriate.
 * However, the admin functions are actually locked down in the Firebase using server-side
 * security.  Hacking this flag locally would show the screens but still wouldn't enable
 * administrator functionality.
 */

import { Member } from './member';

export interface User extends Member {
    isAdmin: boolean;
}