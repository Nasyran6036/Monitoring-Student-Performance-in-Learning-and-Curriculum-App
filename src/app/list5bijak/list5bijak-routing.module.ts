import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { List5bijakPage } from './list5bijak.page';

const routes: Routes = [
  {
    path: '',
    component: List5bijakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class List5bijakPageRoutingModule {}
