import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public diffRatings = ['Principiante', 'Fácil', 'Medio', 'Difícil', 'Imposible'];

  public recipes: Recipe[] = [
    {
      name: 'Fideos con Salsa',
      description: 'Sabrosa receta para comer en familia.',
      time: 30,
      people: 4,
      difficulty: 1
    },
    {
      name: 'Duraznos con Crema',
      description: 'Un postre tradicional y fresco.',
      time: 10,
      people: 2,
      difficulty: 0
    }
  ];

  constructor() { }

  getDiffRating(difficultyIndex: number): string {
    return this.diffRatings[difficultyIndex];
  }
}
