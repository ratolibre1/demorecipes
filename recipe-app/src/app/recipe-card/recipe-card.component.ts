import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {

  name = 'Fideos con Salsa';
  desc = 'Sabrosa receta para comer en familia.';
  cookingTime = 30;
  peopleEating = 4;
  difficulty = 2;

  constructor() { }

  ngOnInit() {}

}
