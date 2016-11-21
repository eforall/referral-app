import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseService {

  constructor(private af: AngularFire) {
  }
}
