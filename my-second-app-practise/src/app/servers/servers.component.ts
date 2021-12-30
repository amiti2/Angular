import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `<h3><app-server></app-server>
                <app-server></app-server></h3>`,
  styles: [`
  h3
  {
    color:red;
    }`]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
