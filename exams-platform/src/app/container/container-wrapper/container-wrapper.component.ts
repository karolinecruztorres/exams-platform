import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { MenuComponent } from '../../components/menu/menu.component';

@Component({
  selector: 'app-container-wrapper',
  standalone: true,
  imports: [MenuComponent, HeaderComponent, DashboardComponent],
  templateUrl: './container-wrapper.component.html',
  styleUrl: './container-wrapper.component.scss',
})
export class ContainerWrapperComponent {}
