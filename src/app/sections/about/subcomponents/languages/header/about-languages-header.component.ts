import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-languages-header',
  templateUrl: './about-languages-header.component.html',
  styleUrls: ['./about-languages-header.component.scss'],
})
export class AboutLanguagesHeaderComponent {
  @Input() personalInfo!: {
    name: string;
    age: number;
  };
}
