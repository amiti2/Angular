import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A test recipe 1','this is a test','https://c.ndtvimg.com/2019-04/tgoepg6_summer-2019-vegetarian-recipes_625x300_10_April_19.jpg'),
    new Recipe('A test recipe 2','this is a test','https://c.ndtvimg.com/2019-04/tgoepg6_summer-2019-vegetarian-recipes_625x300_10_April_19.jpg'),
    new Recipe('A test recipe 3','this is a test','https://c.ndtvimg.com/2019-04/tgoepg6_summer-2019-vegetarian-recipes_625x300_10_April_19.jpg'),
    new Recipe('A test recipe 4','this is a test','https://c.ndtvimg.com/2019-04/tgoepg6_summer-2019-vegetarian-recipes_625x300_10_April_19.jpg')
  ];
  constructor() { }
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  

  ngOnInit(): void {
  }

  onRecipeSelected(recipe:Recipe)
  {
     this.recipeWasSelected.emit(recipe);
  }
}
