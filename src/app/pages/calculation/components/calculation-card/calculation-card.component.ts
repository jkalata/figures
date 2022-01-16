import {
  ICalculationParams,
  FigureParamsUnion,
} from './../../../../interfaces/figure.interfaces';
import { Router } from '@angular/router';
import { CalcService } from './../../../../services/calc.service';
import { FigureCalculator } from '../../FigureCalculator';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculation-card',
  templateUrl: './calculation-card.component.html',
  styleUrls: ['./calculation-card.component.scss'],
})
export class CalculationCardComponent {
  @Output() goToSelection = new EventEmitter();

  calculationParams: ICalculationParams;
  output: number = 0;
  figureCalculator = new FigureCalculator();

  constructor(private calcService: CalcService, private router: Router) {
    this.calculationParams = {
      calculation: this.calcService.getCalculation(),
      figure: this.calcService.getFigure(),
    };
    console.log(this.calculationParams);
  }

  calculate(args: FigureParamsUnion): void {
    this.output = this.figureCalculator.calculateOutput(
      this.calculationParams,
      args
    );
  }

  emitGoToSelection(): void {
    this.router.navigate(['dashboard']);
  }
}
