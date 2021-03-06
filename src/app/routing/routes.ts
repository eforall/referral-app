import { Routes } from '@angular/router';
import { ConfiguredUserGuard } from './configured-user.guard';
import { AdminUserGuard } from './admin-user.guard';
import { ContactDetailResolver } from './contact-detail.resolver';
import { ReferralDetailResolver } from './referral-detail.resolver';
import * as COMPONENTS from '../components';

import { DataReaderService } from '../firebase/data-reader.service';
import { StoreService } from '../store/store.service';

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
            resolve: {
              referralDetail: ReferralDetailResolver
            },
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
            component: COMPONENTS.ContactComponent,
            resolve: {
              contactDetail: ContactDetailResolver
            },
            children: [
              {
                path: '',
                component: COMPONENTS.EditContactComponent,
              },
              {
                path: 'referrals',
                component: COMPONENTS.ContactReferralsComponent,
              }
            ]
          },
        ]
      },
      {
        path: 'admin',
        canActivate: [ AdminUserGuard ],
        component: COMPONENTS.AdminComponent,
        children: [
          {
            path: '',
            component: COMPONENTS.PartnersAdminComponent,
          },
          {
            path: 'members',
            component: COMPONENTS.MembersAdminComponent,
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

