import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertdataPage } from './insertdata.page';

const routes: Routes = [
  {
    path: '',
    component: InsertdataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertdataPageRoutingModule {}
