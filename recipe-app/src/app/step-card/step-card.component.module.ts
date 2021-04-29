import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StepCardComponent } from './step-card.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [StepCardComponent],
  exports: [StepCardComponent]
})
export class StepCardComponentModule {}
