import { Component, computed, input, Input, InputSignal } from "@angular/core";

@Component({
    selector: 'app-project-section',
    standalone: false,
    templateUrl: './project-section.component.html',
    styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent {
    @Input({required: true}) title!: string;
    @Input() imagePath?: string;
    @Input() videoPath?: string;
    @Input() showDummyImage = false;
    @Input() bigTitle = false;
    mediaRight = input(true);

    readonly contentOrderingClass = computed(() => this.mediaRight() ? 'right' : 'left'); 
}