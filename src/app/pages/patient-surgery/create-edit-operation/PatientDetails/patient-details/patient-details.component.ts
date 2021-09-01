import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { BMIComponent } from '../../../../common/bmi/bmi.component';
import { Router } from '@angular/router';
import { CommonFunctions } from '../../../../../providers/Helpers/commonFunctions';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss'],
})
export class PatientDetailsComponent implements OnInit {
  ConsentObtained : boolean;
  PatientHospitalId : string ;
  BMI : string;
  submitted = false;

  constructor(public modalCtrl : ModalController,private router : Router,
    private commonFn : CommonFunctions
    ) { }

  ngOnInit() {}

  patientdetails = new FormGroup({
  ConsentObtained : new FormControl('',[Validators.required]),
  PatientHospitalId : new FormControl('',[Validators.required]),
  BMI : new FormControl('',[Validators.required])
  });

  get f(){
    return this.patientdetails.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.patientdetails.invalid) {
      return;
    }

    console.log(JSON.stringify(this.patientdetails.value, null, 2));
  }

  async OpenBMICalculation(){
   const modal = await this.modalCtrl.create({  
    component: BMIComponent 
  });  
  return await modal.present();  
  }

  GetBMIValue(bmi : string){
    debugger;
    this.BMI = bmi;
    console.log("BMI Value : " + bmi);

  }

  RedirectTo(component){
    this.commonFn.RedirectTo(component);
   }

}
