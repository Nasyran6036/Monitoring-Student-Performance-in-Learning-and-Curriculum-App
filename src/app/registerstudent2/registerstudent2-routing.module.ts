import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Registerstudent2Page } from './registerstudent2.page';

const routes: Routes = [
  {
    path: '',
    component: Registerstudent2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Registerstudent2PageRoutingModule {}
