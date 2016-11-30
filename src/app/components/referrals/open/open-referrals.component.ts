import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/rx';
import { StoreService } from '../../../store/store.service';
import { DataWriterService, Referral, Contact, Partner } from '../../../firebase';

@Component({
  selector: 'ra-openreferrals',
  templateUrl: './open-referrals.component.html',
  styleUrls: ['./open-referrals.component.css']
})
export class ShowOpenReferralsComponent {

  to_pid = "";

  partners: Observable<Partner[]>;

  subscription$: Subscription;
  referrals: Referral[] = [];
  contactsHash: {[cid: string]: Contact} = {};
  partnersHash: {[pid: string]: Partner} = {};

  constructor(private store: StoreService, private writer: DataWriterService) {
    this.to_pid = this.writer.pid;
  }

  ngOnInit() {
    this.partners = this.store.select(store => store.partners);

    this.subscription$ = Observable.combineLatest(
      this.store.select(store => store.referrals).map(referrals => referrals.filter(referral => referral.status == "open")),
      this.store.select(store => store.contacts),
      this.partners
    ).subscribe((players) => {
      if (players[0].length && players[1].length && players[2].length) {
        
        this.contactsHash = players[1].reduce((hash, contact) => {
          hash[contact.cid] = contact;
          return hash;
        }, {});

        this.partnersHash = players[2].reduce((hash, partner) => {
          hash[partner.pid] = partner;
          return hash;
        }, {});

        this.referrals = players[0];
      }
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  filteredReferrals() {
    return this.referrals.filter(referral => referral.to_pid == this.to_pid);
  }
}