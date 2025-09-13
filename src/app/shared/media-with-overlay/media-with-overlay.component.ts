import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-media-with-overlay',
    standalone: false,
    templateUrl: './media-with-overlay.component.html',
    styleUrl: './media-with-overlay.component.scss'
})
export class MediaWithOverlayComponent {
    @Input() imageURL?: string;
    @Input() videoURL?: string;
}