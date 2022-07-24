import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe',
            'This is simply a test',
            'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg'
        ),
        new Recipe(
            'Another Test Recipe',
            'This is simply a test',
            'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg'
        ),
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
