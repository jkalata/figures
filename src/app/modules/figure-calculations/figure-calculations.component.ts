import { FigureCreator } from './creators/FigureCreator';
import {
  IFigure,
  EFigures,
  ECalculations,
} from './interfaces/figure.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figure-calculations',
  templateUrl: './figure-calculations.component.html',
  styleUrls: ['./figure-calculations.component.scss'],
})
export class FigureCalculationsComponent {
  pickedCalculation = {} as ECalculations;
  pickedFigure = {} as IFigure;

  changeFigure(figure: EFigures): void {
    this.pickedFigure = new FigureCreator().create(figure);
  }

  changeCalculation(calculation: ECalculations): void {
    this.pickedCalculation = calculation;
  }
}
