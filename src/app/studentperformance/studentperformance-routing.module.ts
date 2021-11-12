import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentperformancePage } from './studentperformance.page';

const routes: Routes = [
  {
    path: '',
    component: StudentperformancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentperformancePageRoutingModule {}
