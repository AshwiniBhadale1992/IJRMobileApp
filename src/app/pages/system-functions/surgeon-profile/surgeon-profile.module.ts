import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SurgeonProfilePageRoutingModule } from './surgeon-profile-routing.module';
import { HospitalSelectionComponent } from './hospital-selection/hospital-selection.component';

import { SurgeonProfilePage } from './surgeon-profile.page';
import { PersonalSettingsComponent } from './personal-settings/personal-settings.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SurgeonProfilePageRoutingModule
  ],
  declarations: [SurgeonProfilePage,HospitalSelectionComponent,PersonalSettingsComponent],
  entryComponents:[HospitalSelectionComponent],
})
export class SurgeonProfilePageModule {}
