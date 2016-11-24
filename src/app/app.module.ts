import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store';

import * as COMPONENTS from './components';
import * as DIRECTIVES from './directives';
import * as ROUTING from './routing';
import * as FIREBASE from './firebase';

@NgModule({
  declarations: [
    COMPONENTS.AppComponent,
    COMPONENTS.WaitingComponent,
    COMPONENTS.WelcomeComponent,
    COMPONENTS.ShowOpenReferralsComponent,
    COMPONENTS.EditReferralComponent,
    COMPONENTS.CreateContactComponent,
    COMPONENTS.FindContactsComponent,
    COMPONENTS.ViewContactComponent,
    DIRECTIVES.PartnerUserOnlyDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    //HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTING.routes),
    AngularFireModule.initializeApp(FIREBASE.firebaseConfig, FIREBASE.authConfig),
    StoreModule.provideStore(reducer),
  ],
  providers: [
    FIREBASE.AuthService,
    FIREBASE.DataService,
    FIREBASE.DataLoaderService,
    ROUTING.ConfiguredUserGuard,
  ],
  bootstrap: [
    COMPONENTS.AppComponent
  ]
})
export class AppModule { }
