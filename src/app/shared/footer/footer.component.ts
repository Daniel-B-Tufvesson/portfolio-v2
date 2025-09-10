import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: 'footer.component.scss'
})
export class FooterComponent {
    @Input({required: true}) linkedInURL: string = '';
    @Input({required: true}) githubURL: string = '';
    @Input({required: true}) email: string = '';

    year = 2025
}
