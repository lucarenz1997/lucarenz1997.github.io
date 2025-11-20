import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { PERSONAL_INFO } from '../../../../data/personal-data';

type PersonalInfo = typeof PERSONAL_INFO;

@Component({
  selector: 'app-about-languages',
  templateUrl: './about-languages.component.html',
  styleUrls: ['./about-languages.component.scss'],
})
export class AboutLanguagesComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() personalInfo!: PersonalInfo;

  // copy languages so we can add `visible` flag for animation
  languages: Array<
    PersonalInfo['languages'][number] & { visible: boolean; index: number }
  > = [];

  @ViewChildren('langBar') langBars!: QueryList<ElementRef<HTMLDivElement>>;

  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.languages = this.personalInfo.languages.map((l, index) => ({
      ...l,
      visible: false,
      index,
    }));
  }

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

            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
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
