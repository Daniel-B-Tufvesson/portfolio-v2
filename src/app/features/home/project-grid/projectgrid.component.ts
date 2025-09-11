import { Component, Input } from '@angular/core';
import { ProjectData } from '../../../services/data.service';

@Component({
  selector: 'app-project-grid',
  standalone: false,
  templateUrl: './projectgrid.component.html',
  styleUrls: ['./projectgrid.component.scss']
})
export class ProjectGridComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) projects!: ProjectData[];

}