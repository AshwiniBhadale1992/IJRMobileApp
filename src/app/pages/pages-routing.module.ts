import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    component: PagesPage
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'patient-surgery',
    loadChildren: () => import('./patient-surgery/patient-surgery.module').then( m => m.PatientSurgeryPageModule)
  },
  {
    path: 'system-functions',
    loadChildren: () => import('./system-functions/system-functions.module').then( m => m.SystemFunctionsPageModule)
  },

  {
    path: 'surgeon-report',
    loadChildren: () => import('./surgeon-report/surgeon-report.module').then( m => m.SurgeonReportPageModule)
  },
  {
    path: 'manage-surgeons',
    loadChildren: () => import('./manage-surgeons/manage-surgeons.module').then( m => m.ManageSurgeonsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}
