import { FigureCreator } from './../../figure/FigureCreator';
import {
  ICalculationParams,
  Figure,
  ECalculations,
  EFigures,
} from './../../figure/figure.interfaces';

import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent {
  @Output() calculationParams: EventEmitter<ICalculationParams> =
    new EventEmitter();
  @Output() completed: EventEmitter<boolean> = new EventEmitter();

  figure!: Figure;
  calculation!: ECalculations;
  possibleCalculations: string[] = [];
  private figureCreator = new FigureCreator();

  constructor(private router: Router) {}

  changeFigure(event: EFigures) {
    this.figure = this.figureCreator.create(event);
    this.possibleCalculations = this.getPossibleCalculations();
  }

  private getPossibleCalculations(): string[] {
    return Object.getOwnPropertyNames(
      Object.getPrototypeOf(this.figure)
    ).filter((property) => property !== 'constructor');
  }

  changeCalculation(event: ECalculations) {
    this.calculation = event;
    this.completed.emit(true);
  }

  emitParams() {
    this.calculationParams.emit({
      calculation: this.calculation,
      figure: this.figure,
    });
  }
}
