import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ExamsComponent } from '../exams/exams.component';
import { HelpComponent } from '../help/help.component';
import { NotesComponent } from '../notes/notes.component';
import { ResultsComponent } from '../results/results.component';
import { SettingsComponent } from '../settings/settings.component';
import { TutorSupportComponent } from '../tutor-support/tutor-support.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'dashboad',
    title: 'Dashboard',
    component: DashboardComponent,
  },
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRoutingModule {}
