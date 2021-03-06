
import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from '@angular/core'
export class ShoppingListService
{

    ingredientsAdded = new EventEmitter<Ingredient[]>();

  private  ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Carrots', 2),
      ];

      getIngredients()
      {
          return this.ingredients.slice();
      }

      addIngredient(ingredient:Ingredient)
      {
          this.ingredients.push(ingredient);
          this.ingredientsAdded.emit(this.ingredients.slice());
      }

      addIngredients(ingredients:Ingredient[])
      {
            this.ingredients.push(...ingredients);
            this.ingredientsAdded.emit(this.ingredients.slice());
      }
}