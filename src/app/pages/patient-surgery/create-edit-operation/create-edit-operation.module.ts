import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateEditOperationPageRoutingModule } from './create-edit-operation-routing.module';

import { CreateEditOperationPage } from './create-edit-operation.page';
import { DetailsComponent } from './patient-surgery-dashboard/details/details.component';
import { ProceduresComponent } from './patient-surgery-dashboard/procedures/procedures.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateEditOperationPageRoutingModule
  ],
  declarations: [CreateEditOperationPage,DetailsComponent,ProceduresComponent]
})
export class CreateEditOperationPageModule {}
