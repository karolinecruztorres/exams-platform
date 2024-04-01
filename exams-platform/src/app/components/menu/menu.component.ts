import { Component } from '@angular/core';

import { ExamsComponent } from '../exams/exams.component';
import { HelpComponent } from '../help/help.component';
import { NotesComponent } from '../notes/notes.component';
import { ResultsComponent } from '../results/results.component';
import { SettingsComponent } from '../settings/settings.component';
import { TutorSupportComponent } from '../tutor-support/tutor-support.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

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
    DashboardComponent
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
