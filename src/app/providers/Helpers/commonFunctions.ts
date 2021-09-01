import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CommonFunctions
{

 constructor(private router : Router){}
 
    RedirectTo(selectedComponent)
    {
  
        switch(selectedComponent)
        {
        case "patient-details" : 
        { 
          this.router.navigate(["/auth/patient-surgery/patient-details"]);
          break; 
        } 
        case "patient-identifier" : 
        { 
          this.router.navigate(["/auth/patient-surgery/patient-identifier"]);
          break; 
        } 
        case "operation-details" : 
        { 
          this.router.navigate(["/auth/patient-surgery/operation-details"]);
          break; 
        } 
        case "surgeon-details" : 
        { 
          this.router.navigate(["/auth/patient-surgery/surgeon-details"]);
          break; 
        }
        case "create-edit-operation":
          {
            this.router.navigate(["/auth/patient-surgery/create-edit-operation/2"]);
            break; 
          }
         
        }
      }
     

}