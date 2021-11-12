import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pinsert2Page } from './pinsert2.page';

const routes: Routes = [
  {
    path: '',
    component: Pinsert2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pinsert2PageRoutingModule {}
