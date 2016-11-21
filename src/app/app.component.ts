import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from "@angular/material";
import { AuthService } from './firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MdSidenav;

  constructor(private authService: AuthService) {
  }

  signout() {
    this.authService.logout();
  }

}