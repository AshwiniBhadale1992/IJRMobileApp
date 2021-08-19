import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HipPageRoutingModule } from './hip-routing.module';

import { HipPage } from './hip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HipPageRoutingModule
  ],
  declarations: [HipPage]
})
export class HipPageModule {}
