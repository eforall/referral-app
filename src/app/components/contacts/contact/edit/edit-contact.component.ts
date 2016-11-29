import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataWriterService } from '../../../../firebase';

@Component({
  selector: 'ra-editcontact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactDetail;
  form: FormGroup;

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private data: DataWriterService,
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
    this.contactDetail = this.route.snapshot.data['contactDetail'];
    console.log("ngOnInit", this.contactDetail);
  }


  onSubmit() {
    if (this.form.invalid) return;
    //this.data.addContact(this.form.value.name, this.form.value.business);
  }

}