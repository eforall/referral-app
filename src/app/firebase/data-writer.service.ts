import 'rxjs/rx';

import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Partner } from './partner';
import { Member } from './member';


@Injectable()
export class DataWriterService {

  partners: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.partners = this.af.database.list("/partners");
  }

  addPartner(name: string) {
    this.partners.push({name});
  }

}
