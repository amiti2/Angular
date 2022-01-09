import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') app:NgForm;
  defaultValue='teacher';
  defaultUserName="airodha";
  answer="";
  genders:string[]=['male','female'];
  isSubmitted:boolean =false;

  user={
    username:'',
    email:'',
    secret:'',
    questionanswers:'',
    gender:''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.app.form.setValue({
      userData :{
        username:suggestedName,
        email:"abc@yahoo.com"
      },
      secret:'pet',
      questionanswers:'This is test dd',
      gender:'female'
    });

//  this.app.form.patchValue({
//       userData :{
//         username:suggestedName
//       }
//     });
   }

  onSubmit(f:NgForm)
  {
    console.log(this.app);
    this.isSubmitted =true;
    this.user.username =this.app.value.userData.username;
    this.user.email=this.app.value.userData.email;
    this.user.gender=this.app.value.gender;
    this.user.questionanswers=this.app.value.questionanswers;
    this.user.secret=this.app.value.secret;
    this.app.form.reset();

  }
}
