import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.services";

@Injectable()
export class RecipeService
{
      constructor(private shoppingListService :ShoppingListService)
      {

      }
 recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe(
              'Tasty Schnitzel', 
              'A super tasty Tasty Schnitzel', 
              'http://www.google.com/url?sa=i&url=https%3A%2F%2Fpxhere.com%2Fen%2Fphoto%2F961872&psig=AOvVaw1b2kP-tg3hcDDijN_JHlqI&ust=1641220535085000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCLiy9emlk_UCFQAAAAAdAAAAABAD',
              [
                  new Ingredient('Meat',2),
                  new Ingredient('french fries',20)
              ]),
        new Recipe(
              'Big fat burger', 
              'You know burger when you see one ', 
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbigfatburgers.com%2F&psig=AOvVaw3e99xDbMYB_uW4DTrKO46N&ust=1641220528665000&source=images&cd=vfe&ved=0CAgQjRxqFwoTCJjap4mmk_UCFQAAAAAdAAAAABAD',
              [
                    new Ingredient("buns",2),
                    new Ingredient("Meat",1)
              ] ) 
            ];

      getRecipes()
      {
            return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredient:Ingredient[])
      {
           return this.shoppingListService.addIngredients(ingredient);
      }
}