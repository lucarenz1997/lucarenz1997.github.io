import {
  Component,
  AfterViewInit,
  OnDestroy,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { PERSONAL_INFO } from '../../data/personal-data';
import { EXPERIENCES } from '../../data/experience';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  info = PERSONAL_INFO;
  experiences = EXPERIENCES;

  // copy languages so we can add `visible` flag for the animation
  languages = PERSONAL_INFO.languages.map((l, index) => ({
    ...l,
    visible: false as boolean,
    index,
  }));

  @ViewChildren('langBar') langBars!: QueryList<ElementRef<HTMLDivElement>>;

  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const idxAttr = el.dataset['index'];
            const idx = idxAttr ? Number(idxAttr) : NaN;

            if (
              !isNaN(idx) &&
              this.languages[idx] &&
              !this.languages[idx].visible
            ) {
              this.languages[idx].visible = true;
            }

            // stop observing this bar once it has animated
            this.observer?.unobserve(entry.target);
          }
        }
      },
      {
        threshold: 0.1, // ~10% of bar visible before triggering
      }
    );

    this.langBars.forEach((bar) => {
      if (bar?.nativeElement) {
        this.observer?.observe(bar.nativeElement);
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
