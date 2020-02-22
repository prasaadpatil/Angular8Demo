import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe',
            'test desc',
            'https://cdn.pixabay.com/photo/2017/08/08/09/44/food-photography-2610863_960_720.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French fries', 20),
            ])
    ];

    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToSl(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }
}