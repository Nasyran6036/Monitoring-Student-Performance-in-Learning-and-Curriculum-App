import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { List5bijakPageRoutingModule } from './list5bijak-routing.module';

import { List5bijakPage } from './list5bijak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    List5bijakPageRoutingModule
  ],
  declarations: [List5bijakPage]
})
export class List5bijakPageModule {}
