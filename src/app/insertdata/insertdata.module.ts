import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertdataPageRoutingModule } from './insertdata-routing.module';

import { InsertdataPage } from './insertdata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertdataPageRoutingModule
  ],
  declarations: [InsertdataPage]
})
export class InsertdataPageModule {}
