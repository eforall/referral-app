import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataWriterService, ReferralDetail } from '../../../firebase';
import { StoreService } from '../../../store';

@Component({
  selector: 'ra-editreferral',
  templateUrl: './edit-referral.component.html',
  styleUrls: ['./edit-referral.component.css']
})
export class EditReferralComponent {

  //timestamp
  //contactDetail
  //from user
  //from partner
  //to partner
  controlNames = ['from_notes', 'status', 'to_uid', 'to_notes', 'five_hours',
    'result', 'jobs_created', 'jobs_preserved', 'financing_received' ];

  referralDetail: ReferralDetail;
  referralDetail$: Subscription;
  form: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private data: DataWriterService,
              private store: StoreService) {

    this.form = fb.group({
      from_notes: '',
      status: '',
      to_uid: '',
      to_notes: '',
      five_hours: false,
      result: '',
      jobs_created: '',
      jobs_preserved: '',
      financing_received: '',
    });



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
    
    this.controlNames.forEach(controlName => {
      let control: AbstractControl = this.form.controls[controlName];
      if (!control.dirty) {
        control.patchValue(referralDetail[controlName]);
      } 
    });
    
    this.referralDetail = referralDetail;
    
  }

  ngOnDestroy() {
    this.referralDetail$.unsubscribe();
  }

}