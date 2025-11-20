import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './sections/about/about.component';
import { ProjectComponent } from './sections/project/project.component';
import { VideographyComponent } from './sections/videography/videography.component';
import { PhotographyComponent } from './sections/photography/photography.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectComponent,
    VideographyComponent,
    PhotographyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
