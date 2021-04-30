import { Injectable } from '@angular/core';
import { Recipe } from '../interfaces/recipe.interface';
import { Step } from '../interfaces/step.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public diffRatings = ['Principiante', 'Fácil', 'Medio', 'Difícil', 'Imposible'];

  public recipes: Recipe[] = [
    {
      name: 'Duraznos con Crema',
      description: 'Un postre tradicional y fresco.',
      time: 10,
      people: 2,
      difficulty: 0,
      steps: [
        {
          number: 1,
          detail: 'Poner en un recipiente la crema de leche.'
        },
        {
          number: 2,
          detail: 'Colocar en el mismo recipiente la leche condensada y mezclar con un batidor manual, hasta que se integren de forma homogénea.'
        },
        {
          number: 3,
          detail: 'Sacar dos cucharadas del almíbar, verterlos en la mezcla de crema.'
        },
        {
          number: 4,
          detail: 'Trocear los duraznos en cuadros no tan pequeños y agregarlos a la mezcla anterior.'
        },
        {
          number: 5,
          detail: 'Unir con movimientos envolvente los duraznos y la crema.'
        },
        {
          number: 6,
          detail: 'Servir en copas o envases pequeños, decorar con las hojas de menta y refrigerar por dos horas.'
        },
        {
          number: 7,
          detail: 'Sacar de la nevera y consumir de inmediato.'
        }
      ]
    },
    {
      name: 'Fideos con Salsa',
      description: 'Sabrosa receta para comer en familia.',
      time: 30,
      people: 4,
      difficulty: 1,
      steps: []
    }
  ];

  constructor() { }

  getDiffRating(difficultyIndex: number): string {
    return this.diffRatings[difficultyIndex];
  }

  getRecipeSteps(recipe: Recipe): Step[] {
    return recipe.steps;
  }
}
