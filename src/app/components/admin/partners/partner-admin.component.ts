import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state';

@Component({
  selector: 'ra-partneradmin',
  templateUrl: './partner-admin.component.html',
  styleUrls: ['./partner-admin.component.css']
})
export class PartnersAdminComponent {

  constructor(private store: Store<AppState>) {
    store.select(store => store.players.partners);
  }

}