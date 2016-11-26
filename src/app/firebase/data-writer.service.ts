import 'rxjs/rx';

import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Partner } from './partner';
import { Member } from './member';


@Injectable()
export class DataWriterService {

  constructor(private af: AngularFire) {
  }

}
