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
  });
});
