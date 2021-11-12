import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Insert3Page } from './insert3.page';

const routes: Routes = [
  {
    path: '',
    component: Insert3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Insert3PageRoutingModule {}
