import { Component } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private recipeService: RecipeService) {}

  getRecipes(): Recipe[] {
    return this.recipeService.recipes;
  }

}
