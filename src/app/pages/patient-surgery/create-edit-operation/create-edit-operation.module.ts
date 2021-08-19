import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEditOperationPageRoutingModule } from './create-edit-operation-routing.module';

import { CreateEditOperationPage } from './create-edit-operation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEditOperationPageRoutingModule
  ],
  declarations: [CreateEditOperationPage]
})
export class CreateEditOperationPageModule {}
