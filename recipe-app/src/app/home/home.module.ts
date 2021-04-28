import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { MessageComponentModule } from '../message/message.module';
import { RecipeCardComponentModule } from '../recipe-card/recipe-card.component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    RecipeCardComponentModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
