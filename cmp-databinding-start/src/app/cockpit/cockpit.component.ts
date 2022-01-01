import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName:string = '';
  // newServerContent:string = '';
  @Output() serverCreated=new EventEmitter<{name:string, content:string}>();
  @Output('b') blueprintCreated= new EventEmitter<{bpName:string, bpContent:string}>();
  @ViewChild('serverContentInput') serverContentInput:ElementRef;

  
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(serverNameInput:HTMLInputElement) 
  {
    this.serverContentInput.nativeElement.value ="llll";
    this.serverCreated.emit({name:serverNameInput.value,content:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({bpName:serverNameInput.value,bpContent:this.serverContentInput.nativeElement.value});

  }
}
