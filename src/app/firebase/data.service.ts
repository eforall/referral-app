import 'rxjs/rx';

import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DataLoaderService } from './data-loader.service';

import { Partner } from './partner';
import { Member } from './member';


@Injectable()
export class DataService {

  /**
   * The DataLoaderService is not used directly in this class.  However, is still must
   * be injected, which causes it to be instantiated.  It then loads the data once the
   * auth has completed.
   */
  constructor(private af: AngularFire, private loader: DataLoaderService) {
  }

}
