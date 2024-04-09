import { Routes } from '@angular/router';

import { CalendarComponent } from './components/calendar/calendar.component';
import { ExamsComponent } from './components/exams/exams.component';
import { HelpComponent } from './components/help/help.component';
import { LogoComponent } from './components/logo/logo.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResultsComponent } from './components/results/results.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TutorSupportComponent } from './components/tutor-support/tutor-support.component';

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
    path: 'calendar',
    title: 'Calendar',
    component: CalendarComponent,
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

  // {
  //   path: '',
  //   redirectTo: '/dashboard',
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'dashboard',
  //   loadComponent: () =>
  //     import('../dashboard/dashboard.component').then(
  //       (m) => m.DashboardComponent
  //     ),
  // },
  // {
  //   path: 'dashboad',
  //   title: 'Dashboard',
  //   component: DashboardComponent,
  // },
  {
    path: 'exams',
    title: 'Exams',
    component: ExamsComponent,
  },
  {
    path: 'results',
    title: 'Results',
    component: ResultsComponent,
  },
  {
    path: 'notes',
    title: 'Notes',
    component: NotesComponent,
  },
  {
    path: 'tutor-support',
    title: 'Tutor Support',
    component: TutorSupportComponent,
  },
  {
    path: 'settings',
    title: 'Settings',
    component: SettingsComponent,
  },
  {
    path: 'help',
    title: 'Help',
    component: HelpComponent,
  },
];
