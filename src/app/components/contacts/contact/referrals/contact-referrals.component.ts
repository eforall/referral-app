import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from '../../../../store/store.service';
import { DataWriterService } from '../../../../firebase/data-writer.service';

@Component({
  selector: 'ra-contactreferrals',
  templateUrl: './contact-referrals.component.html',
  styleUrls: ['./contact-referrals.component.css']
})
export class ContactReferralsComponent {

  partners;
  referredPartnerId = "";

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: StoreService,
              private data: DataWriterService) {

    this.partners = store.select(store => store.partners);
  }


  referredPartner(referredPartnerId) {
    this.referredPartnerId = referredPartnerId;
  }

  canCreateReferral() {
    return this.referredPartnerId !== "" && this.referredPartnerId !== this.data.pid;
  }

  createReferral() {
    let cid = this.route.parent.snapshot.params["cid"];
    console.log("Create a referral from " + this.data.pid + " to " + this.referredPartnerId + " for contact " + cid);
  }
}