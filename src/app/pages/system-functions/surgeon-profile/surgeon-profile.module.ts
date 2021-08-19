import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurgeonProfilePageRoutingModule } from './surgeon-profile-routing.module';

import { SurgeonProfilePage } from './surgeon-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurgeonProfilePageRoutingModule
  ],
  declarations: [SurgeonProfilePage]
})
export class SurgeonProfilePageModule {}
