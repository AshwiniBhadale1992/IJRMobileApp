import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule,ReactiveFormsModule   } from '@angular/forms';

import { PatientDetailsComponent } from './pages/patient-surgery/create-edit-operation/PatientDetails/patient-details/patient-details.component';
import { OperationDetailsComponent } from './pages/patient-surgery/create-edit-operation/PatientDetails/operation-details/operation-details.component';
import { PatientIdentifierComponent } from './pages/patient-surgery/create-edit-operation/PatientDetails/patient-identifier/patient-identifier.component';
import { SurgeonDetailsComponent } from './pages/patient-surgery/create-edit-operation/PatientDetails/surgeon-details/surgeon-details.component';
import { BMIComponent } from './pages/common/bmi/bmi.component';
import { BMICalculation } from './providers/Helpers/BMICalculation';
import { CommonFunctions } from './providers/Helpers/commonFunctions';
import { ManageSurgeonsPageModule } from './pages/manage-surgeons/manage-surgeons.module';
import { SurgeonProfilePageModule } from './pages/system-functions/surgeon-profile/surgeon-profile.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    ManageSurgeonsPageModule,
    SurgeonProfilePageModule,
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    },
    ),
  ],
  declarations: [AppComponent
    ,PatientDetailsComponent
    ,OperationDetailsComponent
    ,PatientIdentifierComponent
    ,SurgeonDetailsComponent
    ,BMIComponent
  ],
  providers: [InAppBrowser, SplashScreen, StatusBar,BMICalculation,CommonFunctions],
  bootstrap: [AppComponent],
  entryComponents : [BMIComponent]
})
export class AppModule {}
