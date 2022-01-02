import { i18nMetaToJSDoc } from "@angular/compiler/src/render3/view/i18n/meta";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService
{
  private  ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Carrots', 2),
      ];

      getIngredients()
      {
          return this.ingredients.slice();
      }
}