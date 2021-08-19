import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KneePage } from './knee.page';

const routes: Routes = [
  {
    path: '',
    component: KneePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KneePageRoutingModule {}
