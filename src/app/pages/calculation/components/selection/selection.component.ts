import { FigureCreator } from './../../figure/FigureCreator';
import {
  ICalculationParams,
  Figure,
  ECalculations,
  EFigures,
} from './../../figure/figure.interfaces';

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent {
  @Output() calculationParams: EventEmitter<ICalculationParams> =
    new EventEmitter();

  figure!: Figure;
  calculation!: ECalculations;
  possibleCalculations: string[] = [];
  private figureCreator = new FigureCreator();

  changeFigure(event: EFigures): void {
    this.figure = this.figureCreator.create(event);
    this.possibleCalculations = this.getPossibleCalculations();
  }

  private getPossibleCalculations(): string[] {
    return Object.getOwnPropertyNames(
      Object.getPrototypeOf(this.figure)
    ).filter((property) => property !== 'constructor');
  }

  changeCalculation(event: ECalculations): void {
    this.calculation = event;
  }

  emitParams(): void {
    this.calculationParams.emit({
      calculation: this.calculation,
      figure: this.figure,
    });
  }
}
