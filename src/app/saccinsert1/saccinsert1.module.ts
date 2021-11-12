import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Saccinsert1PageRoutingModule } from './saccinsert1-routing.module';

import { Saccinsert1Page } from './saccinsert1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Saccinsert1PageRoutingModule
  ],
  declarations: [Saccinsert1Page]
})
export class Saccinsert1PageModule {}
