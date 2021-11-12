import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherHomepagePageRoutingModule } from './teacher-homepage-routing.module';

import { TeacherHomepagePage } from './teacher-homepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherHomepagePageRoutingModule
  ],
  declarations: [TeacherHomepagePage]
})
export class TeacherHomepagePageModule {}
