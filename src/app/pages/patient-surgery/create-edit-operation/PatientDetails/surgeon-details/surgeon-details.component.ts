import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { CommonFunctions } from '../../../../../providers/Helpers/commonFunctions';

@Component({
  selector: 'app-surgeon-details',
  templateUrl: './surgeon-details.component.html',
  styleUrls: ['./surgeon-details.component.scss'],
})
export class SurgeonDetailsComponent implements OnInit {
  submitted = false;
  constructor(private commonFn : CommonFunctions) { }

  ngOnInit() {}

  surgeondetails = new FormGroup({
    ConsultantInchargeId : new FormControl('',[Validators.required]),
    OperatingSurgeonId : new FormControl('',[Validators.required]),
    OperatingSurgeonGrade : new FormControl('',[Validators.required]),
    FirstAssistantGrade : new FormControl('',[Validators.required])
    });

    get f(){
      return this.surgeondetails.controls;
    }

    onSubmit(): void {
      this.submitted = true;
  
      if (this.surgeondetails.invalid) {
        return;
      }
  
      console.log(JSON.stringify(this.surgeondetails.value, null, 2));
    }

    RedirectTo(component){
      this.commonFn.RedirectTo(component);
     }
}
