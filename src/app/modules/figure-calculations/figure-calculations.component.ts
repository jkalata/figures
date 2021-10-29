import {
  ECalculations,
  Figure,
  ICalculationParams,
} from './interfaces/figure.interfaces';
import { Component } from '@angular/core';

@Component({
  selector: 'app-figure-calculations',
  templateUrl: './figure-calculations.component.html',
  styleUrls: ['./figure-calculations.component.scss'],
})
export class FigureCalculationsComponent {
  pickedCalculation!: ECalculations;
  pickedFigure!: Figure;
  output: number = 0;
  calculationParams!: ICalculationParams;
  step: 'select' | 'calculate' = 'select';

  changeCalculationParams(event: ICalculationParams): void {
    this.calculationParams = event;
    this.step = 'calculate';
  }
}
