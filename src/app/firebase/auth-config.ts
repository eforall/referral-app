import { AuthProviders, AuthMethods } from 'angularfire2';

export const authConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect,
}