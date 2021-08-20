import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageModule } from './pages/auth/auth.module';


const routes: Routes = [
 /*  {
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
     path: 'auth/surgeon-report',
     loadChildren: () => import('./pages/surgeon-report/surgeon-report.module').then( m => m.SurgeonReportPageModule)
  }, */


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

        ]
      },
      {
        path: 'surgeon',
        children: [
          {
            path: 'view-report',
            loadChildren: () => import('./pages/surgeon-report/surgeon-report.module').then(m => m.SurgeonReportPageModule)
          }
        ]
      },
    ]
  },
  // /app/ redirect

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
