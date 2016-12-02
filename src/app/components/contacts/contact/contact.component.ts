import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ra-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  tabLinks = [
     { label: 'Details', link: ''},
     { label: 'Referrals', link: ''},
   ];
   activeLinkIndex = 0;


  constructor(private router: Router, private route: ActivatedRoute) {

    let cid = route.snapshot.params["cid"];
    this.tabLinks[0].link = '/contacts/' + cid;
    this.tabLinks[1].link = '/contacts/' + cid + '/referrals';

    // Initialize the index by checking if a tab link is contained in the url.
    // This is not an ideal check and can be removed if routerLink exposes if it is active.
    // https://github.com/angular/angular/pull/12525
    this.activeLinkIndex =
        this.tabLinks.indexOf(this.tabLinks.find(tab => router.url.indexOf(tab.link) != -1));
  }

}