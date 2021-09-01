import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsComponent } from './pages/patient-surgery/create-edit-operation/PatientDetails/patient-details/patient-details.component';
import { OperationDetailsComponent } from './pages/patient-surgery/create-edit-operation/PatientDetails/operation-details/operation-details.component';
import { PatientIdentifierComponent } from './pages/patient-surgery/create-edit-operation/PatientDetails/patient-identifier/patient-identifier.component';
import { SurgeonDetailsComponent } from './pages/patient-surgery/create-edit-operation/PatientDetails/surgeon-details/surgeon-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
{
    path: 'auth',
    children: [
      {
        path: '',
        children: [


          {
            path: 'login',
            loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginPageModule)
          },
          {
            path: 'home',
            loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'forgot-password',
            loadChildren: () => import('./pages/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
          },
      ]
      },
      {
        path: 'systemfunctions',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/system-functions/system-functions.module').then(m => m.SystemFunctionsPageModule)
          },
          {
            path: 'userprofile',
            loadChildren: () => import('./pages/system-functions/user-profile/user-profile.module').then(m => m.UserProfilePageModule)
          },
          {
            path: 'surgeonprofile',
            loadChildren: () => import('./pages/system-functions/surgeon-profile/surgeon-profile.module').then(m => m.SurgeonProfilePageModule)
          },

        ]
      },
      {
        path: 'surgeon',
        children: [
          {
            path: 'surgeon-report',
            loadChildren: () => import('./pages/surgeon-report/surgeon-report.module').then(m => m.SurgeonReportPageModule)
          },
          {
            path: 'view-report',
            loadChildren: () => import('./pages/surgeon-report/view-surgeon-report/view-surgeon-report.module' ) .then(m => m.ViewSurgeonReportPageModule)
          },
          {
            path: 'manage-surgeons',
            loadChildren: () => import('./pages/manage-surgeons/manage-surgeons.module' ) .then(m => m.ManageSurgeonsPageModule)
          }

        ]
      },
      {
        path: 'patient-surgery',
        children: [
          {
            path: 'create-edit-operation/:id',
            loadChildren: () => import('./pages/patient-surgery/create-edit-operation/create-edit-operation.module').then(m=>m.CreateEditOperationPageModule)
          },
          {
            path: 'patient-details',
            component : PatientDetailsComponent
          },
          {
            path: 'patient-identifier',
            component : PatientIdentifierComponent
          },
          {
            path: 'operation-details',
            component : OperationDetailsComponent
          },
          {
            path: 'surgeon-details',
            component : SurgeonDetailsComponent
          },
         
        ]
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
