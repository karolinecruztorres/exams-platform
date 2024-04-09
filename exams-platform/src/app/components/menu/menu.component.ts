import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { ExamsComponent } from '../exams/exams.component';
import { HelpComponent } from '../help/help.component';
import { NotesComponent } from '../notes/notes.component';
import { ResultsComponent } from '../results/results.component';
import { SettingsComponent } from '../settings/settings.component';
import { TutorSupportComponent } from '../tutor-support/tutor-support.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    ExamsComponent,
    HelpComponent,
    NotesComponent,
    ResultsComponent,
    SettingsComponent,
    TutorSupportComponent,
    DashboardComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
