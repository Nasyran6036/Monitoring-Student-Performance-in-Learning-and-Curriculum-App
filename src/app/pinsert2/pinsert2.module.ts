import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pinsert2PageRoutingModule } from './pinsert2-routing.module';

import { Pinsert2Page } from './pinsert2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pinsert2PageRoutingModule
  ],
  declarations: [Pinsert2Page]
})
export class Pinsert2PageModule {}
