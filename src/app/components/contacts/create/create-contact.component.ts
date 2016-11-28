import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataWriterService } from '../../../firebase';

@Component({
  selector: 'ra-createcontact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private data: DataWriterService,
              private router: Router) {

    this.form = fb.group({
      name: ['', Validators.required],
      business: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    var cid = this.data.addContact(this.form.value.name, this.form.value.business);
    this.router.navigate(["/contacts/" + cid]);
  }

}