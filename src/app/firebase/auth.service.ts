import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState, LoginProfile } from '../store/state';
import { SetLoginAction, ResetLoginAction } from '../store/actions';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

  public loggedIn = false;

  constructor(private store: Store<AppState>, private af: AngularFire, private router: Router) {
    af.auth.subscribe(auth => this.authChanged(auth));
    console.log("Watching auth");
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
