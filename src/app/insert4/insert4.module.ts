import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Insert4PageRoutingModule } from './insert4-routing.module';

import { Insert4Page } from './insert4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Insert4PageRoutingModule
  ],
  declarations: [Insert4Page]
})
export class Insert4PageModule {}
