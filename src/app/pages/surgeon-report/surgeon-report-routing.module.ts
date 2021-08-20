import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurgeonReportPage } from './surgeon-report.page';
import { ViewSurgeonReportPageModule } from './view-surgeon-report/view-surgeon-report.module';

const routes: Routes = [
  {
    path: '',
    component: SurgeonReportPage,
  },
 /*  {
        path: 'view-report',
        loadChildren: () => import('./view-surgeon-report/view-surgeon-report.module').then( m => m.ViewSurgeonReportPageModule)
  }, */

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurgeonReportPageRoutingModule {}
