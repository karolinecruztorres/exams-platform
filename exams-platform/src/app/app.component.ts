import { Component } from '@angular/core';
import { ContainerWrapperComponent } from './container/container-wrapper/container-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContainerWrapperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'exams-platform';
}
