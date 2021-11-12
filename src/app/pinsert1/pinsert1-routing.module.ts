import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pinsert1Page } from './pinsert1.page';

const routes: Routes = [
  {
    path: '',
    component: Pinsert1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pinsert1PageRoutingModule {}
