import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState, LoginProfile } from '../store/state';
import { SetLoginAction, ResetLoginAction } from '../store/actions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';

@Injectable()
export class AuthService {

  public user: Observable<User>;

  constructor(private store: Store<AppState>,
              private af: AngularFire,
              private router: Router) {

    this.user = af.auth
        .map((auth) => {
          if (auth == undefined || auth.auth == undefined) return undefined;
          return {
            uid: auth.auth.uid,
            displayName: auth.auth.displayName,
            email: auth.auth.email,
            emailVerified: auth.auth.emailVerified,
            photoURL: auth.auth.photoURL,
          };
        })
        .do((user) => {
          if (user == undefined) return;
            af.database.object('/members/' + user.uid).update(user);
        })
        .switchMap((value) => {
          if (value == undefined) return Observable.of(undefined);
          return af.database.object('/memberaccess/' + value.uid)
                    .map((o) => {
                      console.log('/memberaccess/' + value.uid, o);
                      return Object.assign({}, value, {pid: o.pid, isAdmin: !!o.isAdmin});
                    })
        });

        this.user.subscribe((user) => {
          console.log("USER", user);

          if (user == undefined) af.auth.login();  //always logged in
          else {
            
          }
        });

  }

  private authChanged(auth) {
    console.log("Auth changed");
    if (auth == null) {
        this.store.dispatch(new ResetLoginAction());
        if (auth === null) this.af.auth.login();  //auto login again
    }
    else {
        var profile: LoginProfile = auth.auth;
        this.store.dispatch(new SetLoginAction(profile));
    }
  }

  logout() {
    console.log("Logging out!");
    this.af.auth.logout();
    this.router.navigate(['/']);
  }
}
