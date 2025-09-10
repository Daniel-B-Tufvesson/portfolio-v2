import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  standalone: false,
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  @Input() title: string = '';

  email = 'daniel.tufvesson@outlook.com';
  linkedInURL = 'https://www.linkedin.com/in/daniel-tufvesson-a4541929a/';
  githubURL = 'https://github.com/Daniel-B-Tufvesson';
}