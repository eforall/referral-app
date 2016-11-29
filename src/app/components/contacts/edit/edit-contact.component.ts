import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ra-editcontact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  contactDetail;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.contactDetail = this.route.snapshot.data['contactDetail'];
    console.log("ngOnInit", this.contactDetail);
  }

}