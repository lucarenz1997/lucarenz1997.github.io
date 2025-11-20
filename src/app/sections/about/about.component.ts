import { Component } from '@angular/core';
import { PERSONAL_INFO } from '../../data/personal-data';
import { EXPERIENCES } from '../../data/experience';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  info = PERSONAL_INFO;
  experiences = EXPERIENCES;
}
