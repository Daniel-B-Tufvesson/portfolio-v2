import { Component, signal } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(public data: DataService) {}
}
