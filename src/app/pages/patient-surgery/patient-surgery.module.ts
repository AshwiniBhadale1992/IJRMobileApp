import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientSurgeryPageRoutingModule } from './patient-surgery-routing.module';

import { PatientSurgeryPage } from './patient-surgery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientSurgeryPageRoutingModule
  ],
  declarations: [PatientSurgeryPage]
})
export class PatientSurgeryPageModule {}
