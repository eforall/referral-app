import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { StoreService } from '../../../store/store.service';
import { Referral } from '../../../firebase';

@Component({
  selector: 'ra-openreferrals',
  templateUrl: './open-referrals.component.html',
  styleUrls: ['./open-referrals.component.css']
})
export class ShowOpenReferralsComponent {

  referrals$: Subscription;
  referrals: Referral[];

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.referrals$ = this.store.select(store => store.referrals).subscribe((referrals: Referral[]) => {
      this.referrals = referrals;
      console.log("referrals", referrals);
    });
  }

  ngOnDestroy() {
    this.referrals$.unsubscribe();
  }
}