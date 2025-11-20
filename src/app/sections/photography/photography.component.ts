import { Component } from '@angular/core';
import { PHOTOS } from '../../data/photos';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss'],
})
export class PhotographyComponent {
  photos = PHOTOS;
}
