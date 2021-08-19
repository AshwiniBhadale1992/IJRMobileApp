import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientSurgeryPage } from './patient-surgery.page';

const routes: Routes = [
  {
    path: '',
    component: PatientSurgeryPage
  },

  {
    path: 'patient-home',
    loadChildren: () => import('./patient-home/patient-home.module').then( m => m.PatientHomePageModule)
  },
  {
    path: 'create-edit-operation',
    loadChildren: () => import('./create-edit-operation/create-edit-operation.module').then( m => m.CreateEditOperationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientSurgeryPageRoutingModule {}
