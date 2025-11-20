import { Component } from '@angular/core';
import { PROJECTS } from '../../data/project';

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  projects = PROJECTS;
}
