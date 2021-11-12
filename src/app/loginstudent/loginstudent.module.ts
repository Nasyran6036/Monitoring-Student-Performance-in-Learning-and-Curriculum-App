import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginstudentPageRoutingModule } from './loginstudent-routing.module';

import { LoginstudentPage } from './loginstudent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginstudentPageRoutingModule
  ],
  declarations: [LoginstudentPage]
})
export class LoginstudentPageModule {}
