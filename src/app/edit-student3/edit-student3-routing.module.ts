import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditStudent3Page } from './edit-student3.page';

const routes: Routes = [
  {
    path: '',
    component: EditStudent3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditStudent3PageRoutingModule {}
