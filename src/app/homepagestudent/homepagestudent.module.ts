import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepagestudentPageRoutingModule } from './homepagestudent-routing.module';

import { HomepagestudentPage } from './homepagestudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepagestudentPageRoutingModule
  ],
  declarations: [HomepagestudentPage]
})
export class HomepagestudentPageModule {}
