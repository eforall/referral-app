import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state';

@Component({
  selector: 'ra-memberadmin',
  templateUrl: './member-admin.component.html',
  styleUrls: ['./member-admin.component.css']
})
export class MembersAdminComponent {

  constructor(private store: Store<AppState>) {
    store.select(store => store.members);
  }

}