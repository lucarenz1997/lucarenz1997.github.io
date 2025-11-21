import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './sections/about/about.component';
import { ProjectComponent } from './sections/project/project.component';
import { VideographyComponent } from './sections/videography/videography.component';
import { PhotographyOverviewComponent } from './sections/photography/photography-overview.component';
import { PhotographyAlbumComponent } from './sections/photography/photography-album.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'videography', component: VideographyComponent },

  // NEW:
  { path: 'photography', component: PhotographyOverviewComponent },
  { path: 'photography/:albumId', component: PhotographyAlbumComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
