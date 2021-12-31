import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[]=[
    new Recipe('A test recipe','this is a test','https://c.ndtvimg.com/2019-04/tgoepg6_summer-2019-vegetarian-recipes_625x300_10_April_19.jpg'),
    new Recipe('A test recipe','this is a test','https://c.ndtvimg.com/2019-04/tgoepg6_summer-2019-vegetarian-recipes_625x300_10_April_19.jpg'),
    new Recipe('A test recipe','this is a test','https://c.ndtvimg.com/2019-04/tgoepg6_summer-2019-vegetarian-recipes_625x300_10_April_19.jpg'),
    new Recipe('A test recipe','this is a test','https://c.ndtvimg.com/2019-04/tgoepg6_summer-2019-vegetarian-recipes_625x300_10_April_19.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
