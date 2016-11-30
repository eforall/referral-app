import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/rx';
import { StoreService } from '../../../store/store.service';
import { Referral, Contact, Partner } from '../../../firebase';

@Component({
  selector: 'ra-openreferrals',
  templateUrl: './open-referrals.component.html',
  styleUrls: ['./open-referrals.component.css']
})
export class ShowOpenReferralsComponent {

  referrals$: Subscription;
  referrals: Referral[] = [];
  contacts: {[cid: string]: Contact} = {};
  partners: {[pid: string]: Partner} = {};

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    Observable.combineLatest(
      this.store.select(store => store.referrals),
      this.store.select(store => store.contacts),
      this.store.select(store => store.partners)
    ).subscribe((players) => {
      if (players[0].length && players[1].length && players[2].length) {
        
        this.contacts = players[1].reduce((hash, contact) => {
          hash[contact.cid] = contact;
          return hash;
        }, {});

        this.partners = players[2].reduce((hash, partner) => {
          hash[partner.pid] = partner;
          return hash;
        }, {});

        this.referrals = players[0];
        console.log("referrals", players, this.contacts, this.partners);
      }
    });
  }

  ngOnDestroy() {
    this.referrals$.unsubscribe();
  }
}