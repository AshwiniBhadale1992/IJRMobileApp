import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageSurgeonsPageRoutingModule } from './manage-surgeons-routing.module';

import { ManageSurgeonsPage } from './manage-surgeons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageSurgeonsPageRoutingModule
  ],
  declarations: [ManageSurgeonsPage]
})
export class ManageSurgeonsPageModule {}
