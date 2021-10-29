import { FigureCreator } from './../../creators/FigureCreator';
import {
  ECalculations,
  EFigures,
  Figure,
  ICalculationParams,
} from './../../interfaces/figure.interfaces';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
})
export class SelectionComponent implements OnInit {
  @Output() calculationParams: EventEmitter<ICalculationParams> =
    new EventEmitter();
  figure!: Figure;
  calculation!: ECalculations;
  possibleCalculations: string[] = [];
  private figureCreator = new FigureCreator();
  constructor() {}

  ngOnInit(): void {}

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
  }

  emitCalculationParams() {
    this.calculationParams.emit({
      figure: this.figure,
      calculation: this.calculation,
    });
  }
}
