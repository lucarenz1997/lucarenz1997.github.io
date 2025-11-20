import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

import { PROJECTS, Project } from '../../data/project';

@Component({
  selector: 'app-projects',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit, OnDestroy {
  // add hasMore + expanded fields
  projects: (Project & { expanded?: boolean; hasMore?: boolean })[] =
    PROJECTS.map((p) => ({ ...p, expanded: false, hasMore: false }));

  private langSub?: Subscription;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.computeHasMore();
    // Recompute when language changes
    this.langSub = this.translate.onLangChange.subscribe((_: LangChangeEvent) =>
      this.computeHasMore()
    );
  }

  ngOnDestroy(): void {
    this.langSub?.unsubscribe();
  }

  private computeHasMore(): void {
    this.projects.forEach((project) => {
      this.translate.get(project.description).subscribe((text: string) => {
        const wordCount = text.split(/\s+/).filter(Boolean).length;
        project.hasMore = wordCount > 50;
      });
    });
  }

  toggle(project: Project & { expanded?: boolean }) {
    project.expanded = !project.expanded;
  }
}
