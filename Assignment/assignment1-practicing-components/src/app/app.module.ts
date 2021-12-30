import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { SuccessfulAlertComponent } from './successful-alert/successful-alert.component';

import { WarningAlertComponent } from './warningalert/warningalert.component';
import { MypgComponent } from './mypg/mypg.component'

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessfulAlertComponent,
    MypgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
