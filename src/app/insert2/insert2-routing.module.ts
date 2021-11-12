import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Insert2Page } from './insert2.page';

const routes: Routes = [
  {
    path: '',
    component: Insert2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Insert2PageRoutingModule {}
