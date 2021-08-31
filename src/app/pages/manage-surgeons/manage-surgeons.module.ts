

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ManageSurgeonsPageRoutingModule } from './manage-surgeons-routing.module';
import { ManageSurgeonsPage } from './manage-surgeons.page';
//import {SearchSurgeonPageModule} from  './search-surgeon/search-surgeon.module';
//import {AddSurgeonsPageModule} from './add-surgeons/add-surgeons.module';
import  {SurgeonsComponent} from './surgeons/surgeons.component';
import { AddSurgeonsComponent } from './add-surgeons/add-surgeons.component';
import { SearchSurgeonsComponent } from './search-surgeons/search-surgeons.component';

@NgModule({
  imports: [

    CommonModule,
    FormsModule,
    IonicModule,
    ManageSurgeonsPageRoutingModule,
   // SearchSurgeonPageModule,
   // AddSurgeonsPageModule,
  ],
  declarations: [ManageSurgeonsPage,SurgeonsComponent,AddSurgeonsComponent,SearchSurgeonsComponent],

    entryComponents: [
      AddSurgeonsComponent,
      SearchSurgeonsComponent
    ]
})
export class ManageSurgeonsPageModule {}
