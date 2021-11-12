import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pinsert3Page } from './pinsert3.page';

const routes: Routes = [
  {
    path: '',
    component: Pinsert3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pinsert3PageRoutingModule {}
