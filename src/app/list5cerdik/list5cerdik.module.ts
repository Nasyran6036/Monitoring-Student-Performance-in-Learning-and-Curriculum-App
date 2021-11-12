import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { List5cerdikPageRoutingModule } from './list5cerdik-routing.module';

import { List5cerdikPage } from './list5cerdik.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    List5cerdikPageRoutingModule
  ],
  declarations: [List5cerdikPage]
})
export class List5cerdikPageModule {}
