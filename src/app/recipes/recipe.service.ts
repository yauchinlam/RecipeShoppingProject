import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is a test', 
        'https://olddesignshop.com/wp-content/uploads/2013/08/OldDesignShop_PastryIgleheartPie1922.jpg',
        [
            new Ingredient('Meat',1),
            new Ingredient('apple',1)
        ]
        ),
        new Recipe('Another Test Recipe', 
        'This is a test', 
        'https://olddesignshop.com/wp-content/uploads/2013/08/OldDesignShop_PastryIgleheartPie1922.jpg',
        [
            new Ingredient('apple',1),
            new Ingredient('sugar',1)
        ])
      ];

    getRecipes(){
        //use slice to return a copy to return by reference
        return this.recipes.slice();
    }
}