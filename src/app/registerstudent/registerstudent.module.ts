import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterstudentPageRoutingModule } from './registerstudent-routing.module';

import { RegisterstudentPage } from './registerstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterstudentPageRoutingModule
  ],
  declarations: [RegisterstudentPage]
})
export class RegisterstudentPageModule {}
