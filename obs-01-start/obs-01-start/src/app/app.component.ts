import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  isActivated:boolean=false;
  constructor(private userService:UserService) {}
  ngOnDestroy(): void {
    this.userService.activatesubject.unsubscribe();
  }

  ngOnInit() {
         this.userService.activatesubject.subscribe(
(data)=>{
  this.isActivated=data;
}

         );
  }
}
