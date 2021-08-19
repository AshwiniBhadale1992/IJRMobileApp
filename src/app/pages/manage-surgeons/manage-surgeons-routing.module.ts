import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageSurgeonsPage } from './manage-surgeons.page';

const routes: Routes = [
  {
    path: '',
    component: ManageSurgeonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageSurgeonsPageRoutingModule {}
