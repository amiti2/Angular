import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string ="No server is created";
  serverName = "";

  constructor() {

    setTimeout(()=>{ this.allowNewServer = true },2000);
   }

   
  ngOnInit(): void {
  }

  onCreateServer(event:any)
  {
    console.log(event);
    this.serverCreationStatus = "Server is created! Name is " +  this.serverName;
  }

  onUpdateServerName(event:Event)
  {
      this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  onHoverDone()
  {
    alert('hi'); 
    this.serverName = "ff"; 
  }

  getDynamicData():string {
    return "online ";
  }
}
