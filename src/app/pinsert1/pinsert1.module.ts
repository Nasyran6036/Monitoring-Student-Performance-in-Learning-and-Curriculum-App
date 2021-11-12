import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pinsert1PageRoutingModule } from './pinsert1-routing.module';

import { Pinsert1Page } from './pinsert1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pinsert1PageRoutingModule
  ],
  declarations: [Pinsert1Page]
})
export class Pinsert1PageModule {}
