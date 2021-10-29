import { ICalculationParams } from './../../interfaces/figure.interfaces';
import { FigureCalculator } from './../../FigureCalculator';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss'],
})
export class CalculationComponent {
  @Input() calculationParams: ICalculationParams = {} as ICalculationParams;
  @Output() goToSelection = new EventEmitter();
  output: number = 0;

  calculate(args: any) {
    this.output = new FigureCalculator().calculateOutput(
      this.calculationParams,
      args
    );
  }

  emitGoToSelection() {
    this.goToSelection.emit();
  }
}
