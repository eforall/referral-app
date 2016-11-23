import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from "@angular/material";
import * as FIREBASE from '../firebase';
import { NavigatorService } from '../routing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private auth: FIREBASE.AuthService, private data: FIREBASE.DataService) {
  }

}