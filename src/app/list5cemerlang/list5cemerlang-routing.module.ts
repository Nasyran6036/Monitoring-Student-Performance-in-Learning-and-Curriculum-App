import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { List5cemerlangPage } from './list5cemerlang.page';

const routes: Routes = [
  {
    path: '',
    component: List5cemerlangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class List5cemerlangPageRoutingModule {}
