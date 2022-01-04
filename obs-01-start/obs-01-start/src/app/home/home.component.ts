import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, observable, Observable } from 'rxjs'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
   private os:Subscription;
  constructor() { }
  ngOnDestroy(): void {
    this.os.unsubscribe();
  }

  ngOnInit() {
    // this.os= interval(1000).subscribe(
    //   (count)=>{ console.log(count);
    //   }
    // )
 //new method
 let count: number=0;
 this.os= new Observable(observer=>{
    let count = 0; 
   setInterval(()=>{      
     observer.next(count);
     count++;       
   },1000); }).subscribe(data=>{ console.log('this is subscribed ' +  data +' times');});
}
  //   const customObservable= Observable.create(
  //         observer=>{
  //           let count =0;
  //           setInterval(()=>{
  //             observer.next(count);
  //             count++;
  //           },1000);
  //         }
 
  //   );
  //  this.os= customObservable.subscribe(data=>{console.log(data)});

  

}
