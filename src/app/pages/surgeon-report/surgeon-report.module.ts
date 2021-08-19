import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurgeonReportPageRoutingModule } from './surgeon-report-routing.module';

import { SurgeonReportPage } from './surgeon-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurgeonReportPageRoutingModule
  ],
  declarations: [SurgeonReportPage]
})
export class SurgeonReportPageModule {}
