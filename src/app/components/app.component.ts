import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from "@angular/material";
import * as FIREBASE from '../firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;

  /**
   * The DataReaderService is not used directly in this class.  However, is still must
   * be injected, which causes it to be instantiated.  It then loads the data once the
   * auth has completed.
   */
  constructor(private auth: FIREBASE.AuthService,
              private reader: FIREBASE.DataReaderService,
              private writer: FIREBASE.DataWriterService,) {
  }

}