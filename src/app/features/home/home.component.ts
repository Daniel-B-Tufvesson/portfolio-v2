import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html'
})
export class HomeComponent {
  protected readonly title = signal('my-portfolio');
}
