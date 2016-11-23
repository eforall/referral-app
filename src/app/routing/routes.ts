import { Routes } from '@angular/router';
import { ConfiguredUserGuard } from './configured-user-guard';
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
        path: 'open',
        canActivate: [ ConfiguredUserGuard ],
        component: COMPONENTS.OpenComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

