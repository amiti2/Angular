import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'practicing-property-eventbinding-viewencapsulation';
  evenNumbers:number[] =[];
  oddNumbers:number[] =[];

  evenCount:number;
  oddCount:number;

  ngOnInit(): void {
    this.evenCount = 0;
   this.oddCount = 0;
  }

  onIntervalFired(count:number)
  {
    if(count % 2===0) 
     {
       //this.evenCount+=1;
       this.evenNumbers.push(count);
     }
     else
     {
       //this.oddCount+=1;
       this.oddNumbers.push(count);
     }
  }
}
