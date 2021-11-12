import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditStudent4Page } from './edit-student4.page';

const routes: Routes = [
  {
    path: '',
    component: EditStudent4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditStudent4PageRoutingModule {}
