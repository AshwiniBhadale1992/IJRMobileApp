import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateEditOperationPage } from './create-edit-operation.page';

const routes: Routes = [
  {
    path: '',
    component: CreateEditOperationPage
  },
  {
    path: 'patient-procedure',
    loadChildren: () => import('./patient-procedure/patient-procedure.module').then( m => m.PatientProcedurePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateEditOperationPageRoutingModule {}
