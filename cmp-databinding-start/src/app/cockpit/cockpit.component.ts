import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName:string = '';
  newServerContent:string = '';
  @Output() serverCreated=new EventEmitter<{name:string, content:string}>();
  @Output('b') blueprintCreated= new EventEmitter<{bpName:string, bpContent:string}>();
  

  constructor() { }

  ngOnInit(): void {
  }
  onAddServer() 
  {
    
    this.serverCreated.emit({name:this.newServerName,content:this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({bpName:this.newServerName,bpContent:this.newServerContent});

  }
}
