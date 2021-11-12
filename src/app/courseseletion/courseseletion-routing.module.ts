import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseseletionPage } from './courseseletion.page';

const routes: Routes = [
  {
    path: '',
    component: CourseseletionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseseletionPageRoutingModule {}
