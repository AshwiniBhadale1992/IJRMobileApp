import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


import { UserProfilePageRoutingModule } from './user-profile-routing.module';
import { UserProfilePage } from './user-profile.page';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeMemorableDataComponent } from './change-memorable-data/change-memorable-data.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserProfilePageRoutingModule,

  ],
  declarations: [UserProfilePage,ChangePasswordComponent,
    ChangeMemorableDataComponent,
    UserSettingsComponent]
})
export class UserProfilePageModule {}
