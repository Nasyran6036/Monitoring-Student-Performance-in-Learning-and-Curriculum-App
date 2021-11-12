import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepagestudentPage } from './homepagestudent.page';

const routes: Routes = [
  {
    path: '',
    component: HomepagestudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagestudentPageRoutingModule {}
