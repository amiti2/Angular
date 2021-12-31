import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  
  counter:Date[]=[];
  constructor() { }
  showHide = false;
  ngOnInit(): void {
  }

  toggleDisplay()
  {
    // this.counter.push(this.counter.length+1);
    this.counter.push(new Date());
     this.showHide = !this.showHide;
  }

  
}
