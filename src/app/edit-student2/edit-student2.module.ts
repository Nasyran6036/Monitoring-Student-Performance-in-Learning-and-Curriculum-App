import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditStudent2PageRoutingModule } from './edit-student2-routing.module';

import { EditStudent2Page } from './edit-student2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditStudent2PageRoutingModule
  ],
  declarations: [EditStudent2Page]
})
export class EditStudent2PageModule {}
