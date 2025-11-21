import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './sections/about/about.component';
import { ProjectComponent } from './sections/project/project.component';
import { VideographyComponent } from './sections/videography/videography.component';
import { MatIconModule } from '@angular/material/icon';
import { TruncateWordsPipe } from './shared/truncate-words.pipe';
import { AboutHeroComponent } from './sections/about/subcomponents/hero/about-hero.component';
import { AboutLanguagesComponent } from './sections/about/subcomponents/languages/about-languages.component';
import { AboutSideCardComponent } from './sections/about/subcomponents/sidecard/about-side-card.component';
import { AboutExperienceComponent } from './sections/about/subcomponents/experience/about-experience.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AboutLanguagesHeaderComponent } from './sections/about/subcomponents/languages/header/about-languages-header.component';
import { PhotographyOverviewComponent } from './sections/photography/photography-overview.component';
import { PhotographyAlbumComponent } from './sections/photography/photography-album.component';

// factory for loading translation files from /assets/i18n
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutHeroComponent,
    AboutLanguagesComponent,
    AboutSideCardComponent,
    AboutExperienceComponent,
    AboutLanguagesHeaderComponent,
    ProjectComponent,
    VideographyComponent,
    PhotographyOverviewComponent,
    PhotographyAlbumComponent,

    // Pipes
    TruncateWordsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
