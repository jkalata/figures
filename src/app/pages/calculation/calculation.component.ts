import { ICalculationParams } from './figure/figure.interfaces';
import { CalculationCardComponent } from './components/calculation-card/calculation-card.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss'],
})
export class CalculationComponent {
  @ViewChild('calculationCar')
  calculationCard!: CalculationCardComponent;
  step: 'calculation' | 'selection' = 'selection';
  calculationParams!: ICalculationParams;
  completed: boolean = false;

  paramsChange(event: ICalculationParams) {
    this.calculationParams = event;
    this.step = 'calculation';
  }
}
