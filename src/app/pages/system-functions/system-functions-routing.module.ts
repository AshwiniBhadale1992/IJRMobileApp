import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemFunctionsPage } from './system-functions.page';

const routes: Routes = [
  {
    path: '',
    component: SystemFunctionsPage
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemFunctionsPageRoutingModule {}
