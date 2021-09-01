import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonFunctions } from '../../../../../providers/Helpers/commonFunctions';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent implements OnInit {

  constructor(private router:Router,private commonFn : CommonFunctions) { }
  ngOnInit() {}

  RedirectTo(component){
   this.commonFn.RedirectTo(component);
  }
}


 
  
 
