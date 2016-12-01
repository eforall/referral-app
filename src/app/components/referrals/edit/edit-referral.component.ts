import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs/rx';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataReaderService, DataWriterService, ContactDetail, ReferralDetail, Partner, Member } from '../../../firebase';
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

  referralDetail$: Subscription;
  partners$: Subscription;
  contactDetail$: Subscription;

  referralDetail: ReferralDetail;
  createdDate = "";
  contactDetail = {};
  fromMemberName = "Unknown Member";
  toMembers: Member[] = [];
  fromPartner: any = { pid: "", name: "Unknown Partner" };
  toPartner: any = { pid: "", name: "Unknown Partner" };

  form: FormGroup;
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private reader: DataReaderService,
              private writer: DataWriterService,
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

    this.referralDetail$ = Observable.combineLatest(
      this.store.select(store => store.referralDetails[rid]).filter(referralDetail => referralDetail !== undefined),
      this.store.select(store => store.members)
    ).subscribe(values => {

      let referralDetail: ReferralDetail = values[0];
      let members: Member[] = values[1];

      if (referralDetail !== undefined && members !== undefined) {
        
        this.patchValues(referralDetail);
        let fromMember = members.find(member => member.pid == referralDetail.from_pid);
        if (fromMember) this.fromMemberName = fromMember.displayName;

        this.toMembers = members.filter(member => member.pid = referralDetail.to_pid);
      }
    });
  }

  patchValues(referralDetail: ReferralDetail) {
    
    this.controlNames.forEach(controlName => {
      let control: AbstractControl = this.form.controls[controlName];
      if (!control.dirty) {
        control.patchValue(referralDetail[controlName]);
      } 
    });
    
    this.referralDetail = referralDetail;
    this.createdDate = new Date(referralDetail.timestamp).toDateString();
    this.reader.loadContactDetail(referralDetail.cid);

    this.contactDetail$ = this.store.select(store => store.contactDetails[referralDetail.cid])
                              .filter(contactDetail => contactDetail !== undefined)
                              .subscribe(contactDetail => {
                                this.contactDetail = contactDetail;
                              });

    this.partners$ = this.store.select(store => store.partners)
                  .subscribe(partners => {
                      partners.forEach(partner => {
                        if (partner.pid == referralDetail.from_pid) this.fromPartner = partner;
                        if (partner.pid == referralDetail.to_pid) this.toPartner = partner;
                      }); 
                  });
  }

  ngOnDestroy() {
    this.referralDetail$.unsubscribe();
    if (this.partners$) this.partners$.unsubscribe();
    if (this.contactDetail$) this.contactDetail$.unsubscribe();
  }

}