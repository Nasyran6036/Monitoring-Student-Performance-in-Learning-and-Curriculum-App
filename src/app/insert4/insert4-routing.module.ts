import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Insert4Page } from './insert4.page';

const routes: Routes = [
  {
    path: '',
    component: Insert4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Insert4PageRoutingModule {}
