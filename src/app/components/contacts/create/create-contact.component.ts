import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'ra-createcontact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent {

  formGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      name: 'Gary',
      email: '',
      notes: '',
    });
  }


  onSubmit() {
    console.log(this.formGroup.value);
  }

  log(value) {
    console.log(value);
  }

}