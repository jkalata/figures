import { ICalculationParams } from './../../interfaces/figure.interfaces';
import { FigureCalculator } from './../../FigureCalculator';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss'],
})
export class CalculationComponent {
  @Input() calculationParams: ICalculationParams = {} as ICalculationParams;
  @Output() goToSelection = new EventEmitter();
  output: number = 0;
  figureCalculator = new FigureCalculator();
  calculate(args: any): void {
    this.output = this.figureCalculator.calculateOutput(
      this.calculationParams,
      args
    );
  }

  emitGoToSelection(): void {
    this.goToSelection.emit();
  }
}
