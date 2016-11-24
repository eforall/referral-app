import { Routes } from '@angular/router';
import { ConfiguredUserGuard } from './configured-user.guard';
import * as COMPONENTS from '../components';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: COMPONENTS.WaitingComponent,
      },
      {
        path: 'welcome',
        component: COMPONENTS.WelcomeComponent,
      },
      {
        path: 'referrals',
        canActivate: [ ConfiguredUserGuard ],
        children: [
          {
            path: '',
            component: COMPONENTS.ShowOpenReferralsComponent,
          },
          {
            path: ':rid',
            component: COMPONENTS.EditReferralComponent,
          },
        ]
      },
      {
        path: 'contacts',
        canActivate: [ ConfiguredUserGuard ],
        children: [
          {
            path: '',
            component: COMPONENTS.FindContactsComponent,
          },
          {
            path: 'create',
            component: COMPONENTS.CreateContactComponent,
          },
          {
            path: ':cid',
            component: COMPONENTS.ViewContactComponent,
          },
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

