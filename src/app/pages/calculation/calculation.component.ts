import { ICalculationParams } from './figure/figure.interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss'],
})
export class CalculationComponent {
  availableSteps = Steps;
  step: Steps = Steps.selection;
  calculationParams!: ICalculationParams;

  paramsChange(event: ICalculationParams) {
    this.calculationParams = event;
    this.step = Steps.calculation;
  }
}

enum Steps {
  'calculation',
  'selection',
}
