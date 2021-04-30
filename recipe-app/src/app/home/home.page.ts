import { Component, OnInit } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  testRecipe: Recipe;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.testRecipe = this.getRecipes()[0];
    console.log('TEST', this.testRecipe);
  }

  getRecipes(): Recipe[] {
    return this.recipeService.recipes;
  }

}
