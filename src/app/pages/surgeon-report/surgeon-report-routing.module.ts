import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurgeonReportPage } from './surgeon-report.page';

const routes: Routes = [
  {
    path: '',
    component: SurgeonReportPage
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurgeonReportPageRoutingModule {}
