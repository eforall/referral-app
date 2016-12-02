import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs/rx';
import { StoreService } from '../../../../store/store.service';
import { Referral, Partner, DataWriterService } from '../../../../firebase';

@Component({
  selector: 'ra-contactreferrals',
  templateUrl: './contact-referrals.component.html',
  styleUrls: ['./contact-referrals.component.css']
})
export class ContactReferralsComponent {

  partners$: Subscription;
  partners;
  openReferrals: Observable<Referral[]>;
  closedReferrals: Observable<Referral[]>;
  partnersHash: {[pid: string]: Partner} = {};
  referredPartnerId = "";

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: StoreService,
              private data: DataWriterService) {

    this.partners = store.select(store => store.partners);

    let cid = route.snapshot.parent.params["cid"];

    this.openReferrals = store.select(store => store.referrals)
                          .map(referrals => referrals.filter(referral => referral.cid == cid && referral.status == "open") );

    this.closedReferrals = store.select(store => store.referrals)
                          .map(referrals => referrals.filter(referral => referral.cid == cid && referral.status !== "open") );

  }

  ngOnInit() {

    this.partners$ = this.partners.subscribe(partners => {
      if (partners.length) {
        this.partnersHash = partners.reduce((hash, partner) => {
          hash[partner.pid] = partner;
          return hash;
        }, {});
      }
    });
  }

  ngOnDestroy() {
    this.partners$.unsubscribe();
  }

  referredPartner(referredPartnerId) {
    this.referredPartnerId = referredPartnerId;
  }

  canCreateReferral() {
    return this.referredPartnerId !== "" && this.referredPartnerId !== this.data.pid;
  }

  createReferral() {
    let cid = this.route.parent.snapshot.params["cid"];
    let rid = this.data.addReferral(cid, this.referredPartnerId);
    this.router.navigate(["/referrals/" + rid]);
  }

  renderDaysOld(date: number) {
    var one_day=1000 * 60 * 60 * 24;   //One day in milliseconds
    return Math.round((Date.now() - date) / one_day);
  }
}