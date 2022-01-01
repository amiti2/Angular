import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server', name:'Testserver',content:'Just a test'},{type:'server', name:'Testserver',content:'Just a test'}];
 baby= {type:'server', name:'Testserver',content:'Just a baby'}
 
 onServerAdded(serverData: {name:string, content:string}) {
  this.serverElements.push({
    type: 'server',
    name: serverData.name,
    content: serverData.content
  });
}

onBlueprintAddded(blueprint:{bpName:string, bpContent:string}) {
  this.serverElements.push({
    type: 'blueprint',
    name: blueprint.bpName,
    content: blueprint.bpContent
  });
}
  onChangeFirst()
  {
    this.serverElements[0].name='changed';
  }

  onDestroy()
  {
    this.serverElements.splice(0,1);
  }
}
