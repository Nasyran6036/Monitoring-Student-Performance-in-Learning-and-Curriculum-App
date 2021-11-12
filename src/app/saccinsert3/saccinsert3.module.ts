import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Saccinsert3PageRoutingModule } from './saccinsert3-routing.module';

import { Saccinsert3Page } from './saccinsert3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Saccinsert3PageRoutingModule
  ],
  declarations: [Saccinsert3Page]
})
export class Saccinsert3PageModule {}
