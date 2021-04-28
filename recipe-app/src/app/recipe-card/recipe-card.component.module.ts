import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecipeCardComponent } from './recipe-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [RecipeCardComponent],
  exports: [RecipeCardComponent]
})
export class RecipeCardComponentModule {}
