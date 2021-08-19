import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PatientProcedurePageRoutingModule } from './patient-procedure-routing.module';

import { PatientProcedurePage } from './patient-procedure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PatientProcedurePageRoutingModule
  ],
  declarations: [PatientProcedurePage]
})
export class PatientProcedurePageModule {}
