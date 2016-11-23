import { Routes } from '@angular/router';
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
        component: COMPONENTS.OpenComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

