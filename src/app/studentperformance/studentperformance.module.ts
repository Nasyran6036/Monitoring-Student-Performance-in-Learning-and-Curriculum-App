import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentperformancePageRoutingModule } from './studentperformance-routing.module';

import { StudentperformancePage } from './studentperformance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentperformancePageRoutingModule
  ],
  declarations: [StudentperformancePage]
})
export class StudentperformancePageModule {}
