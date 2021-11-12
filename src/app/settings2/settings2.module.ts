import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Settings2PageRoutingModule } from './settings2-routing.module';

import { Settings2Page } from './settings2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Settings2PageRoutingModule
  ],
  declarations: [Settings2Page]
})
export class Settings2PageModule {}
