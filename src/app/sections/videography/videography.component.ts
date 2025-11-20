import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VIDEOS, Video } from '../../data/videos';

interface VideoVM {
  title: string;
  url: SafeResourceUrl;
  location?: string;
  year?: number;
}

@Component({
  selector: 'app-videography',
  templateUrl: './videography.component.html',
  styleUrls: ['./videography.component.scss'],
})
export class VideographyComponent {
  videos: VideoVM[];

  constructor(private sanitizer: DomSanitizer) {
    this.videos = VIDEOS.map((v: Video) => ({
      title: v.title,
      location: v.location,
      year: v.year,
      url: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${v.youtubeId}`
      ),
    }));
  }
}
