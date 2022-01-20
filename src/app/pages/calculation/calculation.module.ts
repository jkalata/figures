import { SelectionModule } from './components/selection/selection.module';
import { CalculationRoutingModule } from './calculation-routing.module';
import { CalculationCardModule } from './components/calculation-card/calculation-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationComponent } from './calculation.component';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  declarations: [CalculationComponent],
  imports: [
    CommonModule,
    CalculationCardModule,
    SelectionModule,
    CalculationRoutingModule,
    MatStepperModule,
  ],
})
export class CalculationModule {}
