import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state';

@Component({
  selector: 'ra-partneradmin',
  templateUrl: './partner-admin.component.html',
  styleUrls: ['./partner-admin.component.css'],
})
export class PartnersAdminComponent {

  partners;
  form: FormGroup;

  constructor(private store: Store<AppState>, fb: FormBuilder) {

    this.partners = store.select(store => store.players.partners);
    console.log("PARTNERS", this.partners);

    this.form = fb.group({
      name: ['', Validators.required]
    });
  }

  submitted = false;

  showRequiredError() {
    var control = this.form.controls['name'];
    return control.hasError('required') && this.submitted;
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      this.form.reset();
      this.submitted = false;
    }   
  }

}