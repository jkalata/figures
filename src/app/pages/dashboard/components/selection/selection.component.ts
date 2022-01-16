import { FigureCreator } from './../../../../creators/FigureCreator';
import {
  ICalculationParams,
  Figure,
  ECalculations,
  EFigures,
} from './../../../../interfaces/figure.interfaces';
import { CalcService } from './../../../../services/calc.service';

import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private calcService: CalcService) {}

  changeFigure(event: EFigures) {
    this.figure = this.figureCreator.create(event);
    this.calcService.setFigure(this.figure);
    this.possibleCalculations = this.getPossibleCalculations();
  }

  private getPossibleCalculations(): string[] {
    return Object.getOwnPropertyNames(
      Object.getPrototypeOf(this.figure)
    ).filter((property) => property !== 'constructor');
  }

  changeCalculation(event: ECalculations) {
    this.calculation = event;
    this.calcService.setCalculation(this.calculation);
  }

  goToCalculations() {
    this.router.navigate(['calculation']);
  }
}
