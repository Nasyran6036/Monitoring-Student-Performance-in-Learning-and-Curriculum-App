import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterstudentPage } from './registerstudent.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterstudentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterstudentPageRoutingModule {}
