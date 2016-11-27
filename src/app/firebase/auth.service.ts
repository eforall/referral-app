import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from './user';
import { StoreService } from '../store/store.service';


@Injectable()
export class AuthService {

  //public user: Observable<User>;

  constructor(private store: StoreService,
              private af: AngularFire,
              private router: Router) {

    let user = af.auth
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
          return af.database.object('/access/' + value.uid)
                    .map((o) => {
                      console.log('/access/' + value.uid, o);
                      return Object.assign({}, value, {pid: o.pid, admin: !!o.admin});
                    })
        });

    user.subscribe((user) => {

      this.store.setUser(user);

      if (user == undefined) {
        af.auth.login();  //always logged in
      }
      else {
        if (user.pid) this.router.navigate(["/referrals"]);
        else this.router.navigate(["/welcome"]);
      }
    });

  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['/']);
  }
}
