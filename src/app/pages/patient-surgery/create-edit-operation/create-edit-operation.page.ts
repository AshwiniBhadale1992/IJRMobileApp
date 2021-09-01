import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-edit-operation',
  templateUrl: './create-edit-operation.page.html',
  styleUrls: ['./create-edit-operation.page.scss'],
})
export class CreateEditOperationPage implements OnInit {

  SurgeryDetailsTab : string ;

  constructor(private route: ActivatedRoute) { 
 
  }

  ngOnInit(): void {
    debugger;
    this.route.paramMap.subscribe((params : ParamMap) => 
    this.SurgeryDetailsTab = params.get('id'));
  }

}
