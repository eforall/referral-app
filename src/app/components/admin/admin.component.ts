import { Component, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ra-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {

  tabLinks = [
     { label: 'Partners', link: '/admin'},
     { label: 'Members', link: '/admin/members'},
   ];
   activeLinkIndex = 0;


  constructor(private router: Router) {
    // Initialize the index by checking if a tab link is contained in the url.
    // This is not an ideal check and can be removed if routerLink exposes if it is active.
    // https://github.com/angular/angular/pull/12525
    this.activeLinkIndex =
        this.tabLinks.indexOf(this.tabLinks.find(tab => router.url.indexOf(tab.link) != -1));
  }

}