import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemFunctionsPageRoutingModule } from './system-functions-routing.module';

import { SystemFunctionsPage } from './system-functions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemFunctionsPageRoutingModule
  ],
  declarations: [SystemFunctionsPage]
})
export class SystemFunctionsPageModule {}
