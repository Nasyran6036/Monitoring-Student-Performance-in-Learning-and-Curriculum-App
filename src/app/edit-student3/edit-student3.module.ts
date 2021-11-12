import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditStudent3PageRoutingModule } from './edit-student3-routing.module';

import { EditStudent3Page } from './edit-student3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditStudent3PageRoutingModule
  ],
  declarations: [EditStudent3Page]
})
export class EditStudent3PageModule {}
