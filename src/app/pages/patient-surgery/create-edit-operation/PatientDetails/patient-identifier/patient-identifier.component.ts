import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CommonFunctions } from '../../../../../providers/Helpers/commonFunctions';

@Component({
  selector: 'app-patient-identifier',
  templateUrl: './patient-identifier.component.html',
  styleUrls: ['./patient-identifier.component.scss'],
})
export class PatientIdentifierComponent implements OnInit {
  submitted : boolean = false;

  constructor(private commonFn : CommonFunctions) { }

  ngOnInit() {}

  patientIdentifier = new FormGroup({
    FirstName: new FormControl('',[Validators.required]),
    MiddleName : new FormControl('',[Validators.required]),
    SurName : new FormControl('',[Validators.required]),
    Gender : new FormControl('',[Validators.required]),
    DOB : new FormControl('',[Validators.required]),
    Age : new FormControl(),
    MobileNo : new FormControl('',[Validators.required]),
    ResidencePhoneNo : new FormControl(),
    Email : new FormControl(),
    Address1 : new FormControl('',[Validators.required]),
    Address2 : new FormControl('',[Validators.required]),
    Address3 : new FormControl('',[Validators.required]),
    City : new FormControl('',[Validators.required]),
    State : new FormControl('',[Validators.required]),
    Country : new FormControl('',[Validators.required]),
    Postcode : new FormControl('',[Validators.required]),
    OverseasAddress : new FormControl(),
    PatientIdentifierType : new FormControl(),
    PatientIdentifierNo : new FormControl()
    });

    get f(){
      return this.patientIdentifier.controls;
    }

    onSubmit(): void {
      this.submitted = true;
  
      if (this.patientIdentifier.invalid) {
        return;
      }
  
      console.log(JSON.stringify(this.patientIdentifier.value, null, 2));
    }

    RedirectTo(component){
      this.commonFn.RedirectTo(component);
     }

}
