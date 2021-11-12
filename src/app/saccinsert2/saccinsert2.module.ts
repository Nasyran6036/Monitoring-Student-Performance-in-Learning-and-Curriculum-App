import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Saccinsert2PageRoutingModule } from './saccinsert2-routing.module';

import { Saccinsert2Page } from './saccinsert2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Saccinsert2PageRoutingModule
  ],
  declarations: [Saccinsert2Page]
})
export class Saccinsert2PageModule {}
