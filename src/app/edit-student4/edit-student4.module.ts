import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditStudent4PageRoutingModule } from './edit-student4-routing.module';

import { EditStudent4Page } from './edit-student4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditStudent4PageRoutingModule
  ],
  declarations: [EditStudent4Page]
})
export class EditStudent4PageModule {}
