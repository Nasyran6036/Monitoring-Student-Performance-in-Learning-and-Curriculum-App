import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registerstudent2PageRoutingModule } from './registerstudent2-routing.module';

import { Registerstudent2Page } from './registerstudent2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Registerstudent2PageRoutingModule
  ],
  declarations: [Registerstudent2Page]
})
export class Registerstudent2PageModule {}
