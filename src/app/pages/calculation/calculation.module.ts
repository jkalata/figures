import { CalculationRoutingModule } from './calculation-routing.module';
import { CalculationCardModule } from './components/calculation-card/calculation-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculationComponent } from './calculation.component';

@NgModule({
  declarations: [CalculationComponent],
  imports: [CommonModule, CalculationCardModule, CalculationRoutingModule],
})
export class CalculationModule {}
