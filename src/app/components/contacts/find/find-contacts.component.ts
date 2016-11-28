import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/subscription';
import { StoreService } from '../../../store/store.service';
import { Contact } from '../../../firebase';

@Component({
  selector: 'ra-findcontacts',
  templateUrl: './find-contacts.component.html',
  styleUrls: ['./find-contacts.component.css']
})
export class FindContactsComponent implements OnInit, OnDestroy {

  contacts$: Subscription;
  contacts: Contact[];

  constructor(private store: StoreService) {
  }

  ngOnInit() {
    this.contacts$ = this.store.select(store => store.contacts).subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }

  ngOnDestroy() {
    this.contacts$.unsubscribe();
  }

}