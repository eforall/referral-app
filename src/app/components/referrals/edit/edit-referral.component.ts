import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/rx';
import { Router, ActivatedRoute } from '@angular/router';
import { DataWriterService, ReferralDetail } from '../../../firebase';
import { StoreService } from '../../../store';

@Component({
  selector: 'ra-editreferral',
  templateUrl: './edit-referral.component.html',
  styleUrls: ['./edit-referral.component.css']
})
export class EditReferralComponent {

  referralDetail: ReferralDetail;
  referralDetail$: Subscription;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: StoreService) {

    let rid = route.snapshot.params["rid"];

  }

  ngOnInit() {
    // We could get the referralDetail from the snapshot which was loaded in
    // referral-detail.resolver, but that is a snapshot.  The resolver ensures
    // the data is available before this component is shown, but we want to
    // get the referralDetail directly from the store so it is observable.

    //// this.referralDetail = this.route.snapshot.data['referralDetail'];
    
    let rid = this.route.snapshot.params["rid"];
    this.referralDetail$ = this.store.select(store => store.referralDetails[rid])
                                    .filter(referralDetail => referralDetail !== undefined)
                                    .subscribe((referralDetail => this.patchValues(referralDetail)));
  }

  patchValues(referralDetail: ReferralDetail) {
    /*
    this.controlNames.forEach(controlName => {
      let control: AbstractControl = this.form.controls[controlName];
      if (!control.dirty) {
        control.patchValue(contactDetail[controlName]);
      } 
    });
    */
    this.referralDetail = referralDetail;
    
  }

  ngOnDestroy() {
    this.referralDetail$.unsubscribe();
  }

}