import { Component } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import { DataService, Message } from '../services/data.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService, private recipeService: RecipeService) {}

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getRecipes(): Recipe[] {
    return this.recipeService.recipes;
  }

}
