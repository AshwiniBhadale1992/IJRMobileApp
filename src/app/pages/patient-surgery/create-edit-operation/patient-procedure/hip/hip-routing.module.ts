import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HipPage } from './hip.page';

const routes: Routes = [
  {
    path: '',
    component: HipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HipPageRoutingModule {}
