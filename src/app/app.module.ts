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

import { AppComponent } from './app.component';
import * as ROUTER from './router';
import * as FIREBASE from './firebase';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    //HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTER.routes),
    AngularFireModule.initializeApp(FIREBASE.firebaseConfig, FIREBASE.authConfig),
    StoreModule.provideStore(reducer),
  ],
  providers: [
    FIREBASE.AuthService,
    FIREBASE.FirebaseService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
