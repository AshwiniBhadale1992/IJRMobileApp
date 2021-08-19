import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSurgeonReportPageRoutingModule } from './view-surgeon-report-routing.module';

import { ViewSurgeonReportPage } from './view-surgeon-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSurgeonReportPageRoutingModule
  ],
  declarations: [ViewSurgeonReportPage]
})
export class ViewSurgeonReportPageModule {}
