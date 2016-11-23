/**
 * This service checks whether routes should be accessible and redirect away as needed.
 */

import { Injectable } from '@angular/core';
import { AuthService } from '../firebase/auth.service';
import { Router, Event as NavigationEvent } from '@angular/router';


@Injectable()
export class NavigatorService {

  constructor(private authService: AuthService, private router: Router) {
    this.router.events.subscribe((event: NavigationEvent) => {
        console.log("NavigationEvent", event);
    });
  }
}
