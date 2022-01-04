import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NopageComponent } from './nopage/nopage.component';
const appRoutes=[

  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"userfff/f",
    component:UserComponent
  },
  
  {
    path:"nopage",
    component:NopageComponent
  },{
    path:"**",
    redirectTo:"nopage"
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NopageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
