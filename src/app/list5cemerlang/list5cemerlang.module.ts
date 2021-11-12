import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { List5cemerlangPageRoutingModule } from './list5cemerlang-routing.module';

import { List5cemerlangPage } from './list5cemerlang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    List5cemerlangPageRoutingModule
  ],
  declarations: [List5cemerlangPage]
})
export class List5cemerlangPageModule {}
