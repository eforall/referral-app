import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/subscription';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DataWriterService, ContactDetail } from '../../../../firebase';
import { StoreService } from '../../../../store';

@Component({
  selector: 'ra-editcontact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit, OnDestroy {

  controlNames = [ 'name', 'email', 'phone', 'contact_method',  'language',
      'gender', 'race', 'business', 'website', 'business_status',
      'address', 'immigrant', 'non_native_english', 'low_income',
      'was_unemployed', 'veteran'];

  contactDetail: ContactDetail;
  contactDetail$: Subscription;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private data: DataWriterService,
              private store: StoreService,
              private router: Router) {

    this.form = fb.group({
      name: ['', Validators.required],
      email: '',
      phone: '',
      contact_method: '',
      language: '',
      gender: '',
      race: '',
      business: ['', Validators.required],
      website: '',
      business_status: '',
      address: '',
      immigrant: false,
      non_native_english: false,
      low_income: false,
      was_unemployed: false,
      veteran: false,
    });
  }

  ngOnInit() {
    // We could get the contactDetail from the snapshot which was loaded in
    // contact-detail.resolver, but that is a snapshot.  The resolver ensures
    // the data is available before this component is shown, but we want to
    // get the contactDetail directly from the store so it is observable.

    //// this.contactDetail = this.route.snapshot.data['contactDetail'];
    
    let cid = this.route.snapshot.params["cid"];
    this.contactDetail$ = this.store.select(store => store.contactDetails[cid])
                                    .filter(contactDetails => contactDetails !== undefined)
                                    .subscribe((contactDetail => this.patchValues(contactDetail)));
  }

  patchValues(contactDetail: ContactDetail) {
    this.controlNames.forEach(controlName => {
      let control: AbstractControl = this.form.controls[controlName];
      if (!control.dirty) {
        control.patchValue(contactDetail[controlName]);
      } 
    });

    this.contactDetail = contactDetail;
  }

  ngOnDestroy() {
    this.contactDetail$.unsubscribe();
  }

  onSubmit() {
    if (this.form.invalid) return;
    if (!this.form.dirty) return;

    let newDetail = {};
    let somethingChanged = false;

    this.controlNames.forEach(controlName => {
      let control: AbstractControl = this.form.controls[controlName];
      let value = control.value;
      if (typeof(value) == "string") value = value.trim();

      if (value !== this.contactDetail[controlName]) {
        somethingChanged = true;
        newDetail[controlName] = control.value;
      }
    });

      this.contactDetail = Object.assign({}, this.contactDetail, newDetail);
      this.form.reset(this.contactDetail);

      this.data.editContact(this.contactDetail.cid, newDetail);
  }
}