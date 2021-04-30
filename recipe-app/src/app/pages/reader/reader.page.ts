import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.page.html',
  styleUrls: ['./reader.page.scss'],
})
export class ReaderPage implements OnInit {
  testRecipe: Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.testRecipe = this.getRecipes()[0];
    console.log('TEST', this.testRecipe);
  }

  getRecipes(): Recipe[] {
    return this.recipeService.recipes;
  }

}
