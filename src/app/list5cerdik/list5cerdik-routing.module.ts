import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { List5cerdikPage } from './list5cerdik.page';

const routes: Routes = [
  {
    path: '',
    component: List5cerdikPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class List5cerdikPageRoutingModule {}
