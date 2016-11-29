import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { StoreModule } from '@ngrx/store';

import * as STORE from './store';
import * as COMPONENTS from './components';
import * as DUMB_COMPONENTS from './components/dumb';
import * as DIRECTIVES from './directives';
import * as ROUTING from './routing';
import * as FIREBASE from './firebase';

@NgModule({
  declarations: [
    COMPONENTS.AppComponent,
    COMPONENTS.AdminComponent,
    COMPONENTS.PartnersAdminComponent,
    COMPONENTS.MembersAdminComponent,
    COMPONENTS.WaitingComponent,
    COMPONENTS.WelcomeComponent,
    COMPONENTS.ShowOpenReferralsComponent,
    COMPONENTS.EditReferralComponent,
    COMPONENTS.CreateContactComponent,
    COMPONENTS.EditContactComponent,
    COMPONENTS.FindContactsComponent,
    DUMB_COMPONENTS.PartnerList,
    DUMB_COMPONENTS.PartnerSelect,
    DIRECTIVES.AdminUserOnlyDirective,
    DIRECTIVES.PartnerUserOnlyDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    //HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTING.routes),
    AngularFireModule.initializeApp(FIREBASE.firebaseConfig, FIREBASE.authConfig),
    StoreModule.provideStore(STORE.reducer),
  ],
  providers: [
    STORE.StoreService,
    FIREBASE.AuthService,
    FIREBASE.DataReaderService,
    FIREBASE.DataWriterService,
    ROUTING.ConfiguredUserGuard,
    ROUTING.AdminUserGuard,
    ROUTING.ContactDetailResolver,
  ],
  bootstrap: [
    COMPONENTS.AppComponent
  ]
})
export class AppModule { }
