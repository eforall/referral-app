import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from "@angular/material";
import * as FIREBASE from '../firebase';
import * as STORE from '../store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;

  public static _reader: FIREBASE.DataReaderService;
  public static _store: STORE.StoreService; 


  /**
   * The DataReaderService is not used directly in this class.  However, is still must
   * be injected, which causes it to be instantiated.  It then loads the data once the
   * auth has completed.
   */
  constructor(private auth: FIREBASE.AuthService,
              private reader: FIREBASE.DataReaderService,
              private writer: FIREBASE.DataWriterService,
              private store: STORE.StoreService) {

                //
                // HACK: There appears to be a bug in the Angular Router's use of resolvers and DI.
                // To get around it for now, the dependencies are stored here statically. This should
                // be removed in favor of regular DI when the router it is fixed. See the resolver classes. 
                // https://github.com/angular/angular/issues/12995
                //
                AppComponent._store = store;
                AppComponent._reader = reader;
  }

}