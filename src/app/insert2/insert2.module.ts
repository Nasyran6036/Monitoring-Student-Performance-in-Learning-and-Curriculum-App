import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Insert2PageRoutingModule } from './insert2-routing.module';

import { Insert2Page } from './insert2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Insert2PageRoutingModule
  ],
  declarations: [Insert2Page]
})
export class Insert2PageModule {}
