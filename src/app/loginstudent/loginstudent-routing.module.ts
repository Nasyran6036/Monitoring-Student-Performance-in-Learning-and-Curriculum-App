import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginstudentPage } from './loginstudent.page';

const routes: Routes = [
  {
    path: '',
    component: LoginstudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginstudentPageRoutingModule {}
