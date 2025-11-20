import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './sections/about/about.component';
import { ProjectComponent } from './sections/project/project.component';
import { VideographyComponent } from './sections/videography/videography.component';
import { PhotographyComponent } from './sections/photography/photography.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AboutComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'videography', component: VideographyComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
