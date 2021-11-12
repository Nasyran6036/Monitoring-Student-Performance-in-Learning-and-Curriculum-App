import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Insert3PageRoutingModule } from './insert3-routing.module';

import { Insert3Page } from './insert3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Insert3PageRoutingModule
  ],
  declarations: [Insert3Page]
})
export class Insert3PageModule {}
