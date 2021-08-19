import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSurgeonReportPage } from './view-surgeon-report.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSurgeonReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSurgeonReportPageRoutingModule {}
