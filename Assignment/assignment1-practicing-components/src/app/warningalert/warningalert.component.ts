import { Component} from '@angular/core'
@Component({
    selector:'app-warningalert',
    templateUrl:'./warningalert.component.html',
    styles:['h1{ color:green;}'] 
})
export class WarningAlertComponent
{
 userName:string="";
 hideButton  = this.CheckVisibility();

 MakeStringEmpty()
 {
         this.userName='';
  
 }

 CheckVisibility() 
 {
     if(this.userName=="")
     {
               
         return true;
     }
     else{
         return false;
     }
 }
}