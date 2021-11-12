import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherHomepagePage } from './teacher-homepage.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherHomepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherHomepagePageRoutingModule {}
