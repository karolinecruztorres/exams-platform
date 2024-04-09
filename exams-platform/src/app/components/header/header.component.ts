import { Component } from '@angular/core';

import { CalendarComponent } from '../calendar/calendar.component';
import { LogoComponent } from '../logo/logo.component';
import { NotificationsComponent } from '../notifications/notifications.component';
import { ProfileComponent } from '../profile/profile.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LogoComponent,
    SearchBarComponent,
    NotificationsComponent,
    ProfileComponent,
    CalendarComponent,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
