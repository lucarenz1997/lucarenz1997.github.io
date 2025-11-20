import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-languages-list',
  templateUrl: './about-languages-list.component.html',
  styleUrls: ['./about-languages-list.component.scss'],
})
export class AboutLanguagesListComponent {
  @Input() languages!: any[];
}
