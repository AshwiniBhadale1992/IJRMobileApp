import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientProcedurePage } from './patient-procedure.page';

const routes: Routes = [
  {
    path: '',
    component: PatientProcedurePage
  },
  {
    path: 'hip',
    loadChildren: () => import('./hip/hip.module').then( m => m.HipPageModule)
  },
  {
    path: 'knee',
    loadChildren: () => import('./knee/knee.module').then( m => m.KneePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientProcedurePageRoutingModule {}
