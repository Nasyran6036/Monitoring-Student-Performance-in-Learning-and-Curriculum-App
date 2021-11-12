import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Saccinsert2Page } from './saccinsert2.page';

const routes: Routes = [
  {
    path: '',
    component: Saccinsert2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Saccinsert2PageRoutingModule {}
