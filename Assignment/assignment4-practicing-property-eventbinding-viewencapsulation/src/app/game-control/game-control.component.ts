import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired = new EventEmitter<number>();
  counter :number =0 ;
  constructor() { 

    
  }

  myInterval :any;


  ngOnInit(): void {
   
  }
  onStartGame()
  {
    this.myInterval =  setInterval(() => {
      this.counter +=1;
       this.callEventEmitter();
       }, 1000);   
  }

  callEventEmitter()
  {
    //console.log("counter :" + this.counter)
    this.intervalFired.emit(this.counter);
  }

  onStopGame()
  {
    this.counter = 0;
    clearInterval(this.myInterval);
    console.log('stop game called');
  }
}
