import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng4-complete-guide';
  loadedFeature:string = "recipe";

  onNavigate(feature:string)
  {
    this.loadedFeature = feature;
    // console.log(item);
    // console.log(dollorsignevent);
    // if(item =='recipe')
    // {
    //   this.showRecipe = true;
    //   this.showList =false;
    // }
    // else{
    //   this.showRecipe = false;
    //   this.showList =true;
    // }

  }
}
