import { Component, Input } from '@angular/core';
import { Experience } from '../../../../data/experience';

@Component({
  selector: 'app-about-experience',
  templateUrl: './about-experience.component.html',
  styleUrls: ['./about-experience.component.scss'],
})
export class AboutExperienceComponent {
  @Input() experiences: Experience[] = [];
}
