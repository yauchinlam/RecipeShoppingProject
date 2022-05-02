import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from "@angular/core";
@Injectable()
export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Flour', 5)
      ];

    getIngredients(){
        //again return by reference
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
    }
}