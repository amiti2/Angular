import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, observable, Observable } from 'rxjs'
import { elementAt } from 'rxjs-compat/operator/elementAt';
import { filter, map } from 'rxjs/operators';

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
 const customObservable= new Observable(observer=>{
    let count = 0; 
   setInterval(()=>{      
     observer.next(count);
     if(count == 2)
     {
       observer.complete();
     }
     if(count===3)
     {
       observer.error({name:'died'})
     }

     count++;       
   },1000); })
   

   //customObservable.pipe(map(data=>{ return 'result:' + data}));
   
   this.os=customObservable.pipe(
    filter((data:number)=>{
          if ((data%2) ==0)
          {
            return true;
          }
          return false;
    }), 
    map(data=>{ return 'result:' + data})).subscribe(data=>{ console.log(data);},err=>{ console.log(err.name)},()=>{ console.log('completed')});
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
