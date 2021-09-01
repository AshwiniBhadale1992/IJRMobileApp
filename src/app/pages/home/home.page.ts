import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }


  RedirectTo(selectedComponent){
    debugger;
    switch(selectedComponent)
    {
    case "create-edit-operation" : 
    { 
      this.router.navigate(["/auth/patient-surgery/create-edit-operation/1"]);
      break; 
    } 
    }
  }

}
