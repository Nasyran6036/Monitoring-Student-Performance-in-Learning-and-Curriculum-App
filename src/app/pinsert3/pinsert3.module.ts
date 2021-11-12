import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pinsert3PageRoutingModule } from './pinsert3-routing.module';

import { Pinsert3Page } from './pinsert3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pinsert3PageRoutingModule
  ],
  declarations: [Pinsert3Page]
})
export class Pinsert3PageModule {}
