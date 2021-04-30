import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  let service: RecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the appropriate difficulty ratings', () => {
    spyOn(service, 'getDiffRating').and.callThrough();

    const expected = {
      beginner: 'Principiante',
      easy: 'Fácil',
      medium: 'Medio',
      hard: 'Difícil',
      impossible: 'Imposible'
    };

    const actual = {
      beginner: service.getDiffRating(0),
      easy: service.getDiffRating(1),
      medium: service.getDiffRating(2),
      hard: service.getDiffRating(3),
      impossible: service.getDiffRating(4)
    };

    expect(actual.beginner).toEqual(expected.beginner);
    expect(actual.easy).toEqual(expected.easy);
    expect(actual.medium).toEqual(expected.medium);
    expect(actual.hard).toEqual(expected.hard);
    expect(actual.impossible).toEqual(expected.impossible);
    expect(service.getDiffRating).toHaveBeenCalledTimes(5);
  });

  it('should get the steps for a given recipe', () => {
    spyOn(service, 'getRecipeSteps').and.callThrough();

    const input = {
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
    };

    const expected = [
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
    ];

    const actual = service.getRecipeSteps(input);

    expect(actual).toEqual(expected);
    expect(service.getRecipeSteps).toHaveBeenCalledTimes(1);
  });
});
