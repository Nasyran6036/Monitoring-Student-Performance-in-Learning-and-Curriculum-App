import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Saccinsert1Page } from './saccinsert1.page';

const routes: Routes = [
  {
    path: '',
    component: Saccinsert1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Saccinsert1PageRoutingModule {}
