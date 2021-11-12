import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseseletionPageRoutingModule } from './courseseletion-routing.module';

import { CourseseletionPage } from './courseseletion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseseletionPageRoutingModule
  ],
  declarations: [CourseseletionPage]
})
export class CourseseletionPageModule {}
