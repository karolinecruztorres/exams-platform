import { Routes } from '@angular/router';

import { LogoComponent } from './components/logo/logo.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

export const routes: Routes = [
  {
    path: 'logo',
    title: 'Logo',
    component: LogoComponent,
  },
  {
    path: 'search-bar',
    title: 'Search',
    component: SearchBarComponent,
  },
  {
    path: 'notifications',
    title: 'Notifications',
    component: NotificationsComponent,
  },
  {
    path: 'profile',
    title: 'Profile',
    component: ProfileComponent,
  },
];
