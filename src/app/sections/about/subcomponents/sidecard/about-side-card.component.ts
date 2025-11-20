import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-side-card',
  templateUrl: './about-side-card.component.html',
  styleUrls: ['./about-side-card.component.scss'],
})
export class AboutSideCardComponent {
  @Input() hobbies: string[] = [];
  @Input() social!: {
    github: string;
    linkedin: string;
    instagram: string;
    youtube: string;
    email: string;
  };
}
