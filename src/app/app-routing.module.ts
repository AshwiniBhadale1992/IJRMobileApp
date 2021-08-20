import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesPageModule)
  },
  {
    path: 'auth/home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'auth/user-profile',
    loadChildren: () => import('./pages/system-functions/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'auth/view-surgeon-report',
    loadChildren: () => import('./pages/surgeon-report/surgeon-report.module').then(m=>m.SurgeonReportPageModule)
  },
  {
    path: 'patient-surgery/create-edit-operation',
    loadChildren: () => import('./pages/patient-surgery/create-edit-operation/create-edit-operation.module').then(m=>m.CreateEditOperationPageModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
