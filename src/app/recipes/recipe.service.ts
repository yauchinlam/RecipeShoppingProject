import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 
        'https://olddesignshop.com/wp-content/uploads/2013/08/OldDesignShop_PastryIgleheartPie1922.jpg'),
        new Recipe('Another Test Recipe', 'This is a test', 
        'https://olddesignshop.com/wp-content/uploads/2013/08/OldDesignShop_PastryIgleheartPie1922.jpg')
      ];

    getRecipes(){
        //use slice to return a copy to return by reference
        return this.recipes.slice();
    }
}