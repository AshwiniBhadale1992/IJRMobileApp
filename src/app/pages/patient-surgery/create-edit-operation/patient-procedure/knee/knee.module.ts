import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KneePageRoutingModule } from './knee-routing.module';

import { KneePage } from './knee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KneePageRoutingModule
  ],
  declarations: [KneePage]
})
export class KneePageModule {}
