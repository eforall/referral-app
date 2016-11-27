import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StoreService } from '../store/store.service';



/**
 * Guards are hooks into the route resolution process, providing an opportunity
 * to inform the router's navigation process whether the route should continue
 * to activate this route. Guards must return an observable of true or false.
 */
@Injectable()
export class ConfiguredUserGuard implements CanActivate {

  constructor(private store: StoreService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.store.select(store => store.user).map((user) => {
        return !!user && !!user.pid;
    });
  }

}
