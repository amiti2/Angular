import { OnDestroy, Component,Input, OnChanges, OnInit, SimpleChanges, DoCheck, AfterContentInit,AfterContentChecked, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css']
})
export class ServerElementsComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  OnDestroy
  {

  abc:string;
   @Input('srvElement') element:{type:string, name:string, content:string};
   @ViewChild('heading') header:ElementRef;
   @ContentChild('paragraph') paragraph:ElementRef;
  @Input() name:string;
  constructor() {
   // console.log('constructor called');
   }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
   ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
  ngAfterViewInit()  {
    console.log('ngAfterViewInit called');
    console.log(this.header);
    console.log("heading is : " +  this.header.nativeElement.textContent);
  }



  ngAfterContentChecked() {
    console.log('ng after ngAfterContentChecked called');
  }
  ngAfterContentInit()  {
    console.log('ngAfterContentInit init called');
    console.log("heading is : " +  this.paragraph.nativeElement.textContent);
  }


  ngOnInit(): void {
    console.log('ng oninit called');
   // console.log("heading is : " +  this.paragraph.nativeElement.textContent);
  }

  ngOnChanges(changes:SimpleChanges){
    console.log('ng on changes called');
    console.log(changes);
  }

  ngDoCheck()
  {
    console.log('ng do check called');
  }
}
