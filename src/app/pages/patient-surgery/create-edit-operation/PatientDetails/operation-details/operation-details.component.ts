import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl ,Validators} from '@angular/forms';
import { CommonFunctions } from '../../../../../providers/Helpers/commonFunctions';

@Component({
  selector: 'app-operation-details',
  templateUrl: './operation-details.component.html',
  styleUrls: ['./operation-details.component.scss'],
})
export class OperationDetailsComponent implements OnInit {
  submitted : boolean = false;
  constructor(private commonFn : CommonFunctions) { }

  ngOnInit() {}


  operationdetails = new FormGroup({
    HospitalId: new FormControl('',[Validators.required]),
    OperationDate : new FormControl('',[Validators.required]),
    AnestheticTypes : new FormControl('',[Validators.required]),
    PatientASAGrade : new FormControl('',[Validators.required]),
    OperationFunding : new FormControl('',[Validators.required])
    });

    get f(){
      return this.operationdetails.controls;
    }


    onSubmit(): void {
      this.submitted = true;
  
      if (this.operationdetails.invalid) {
        return;
      }
  
      console.log(JSON.stringify(this.operationdetails.value, null, 2));
    }

    RedirectTo(component){
      this.commonFn.RedirectTo(component);
     }

}
