import { Figure, ECalculations } from './../interfaces/figure.interfaces';

import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class CalcService {
  private figure!: Figure;
  private calculation!: ECalculations;
  constructor(private storageService: LocalstorageService) {
    this.initParamsFromStorage();
  }

  private initParamsFromStorage() {
    this.setFigure(this.storageService.getItem('figure') as Figure);
    //@ts-ignore
    this.setCalculation(this.storageService.getItem('calculation') as string);
  }

  setFigure(figure: Figure): void {
    this.figure = figure;
    this.storageService.setItem('figure', this.figure);
  }

  getFigure(): Figure {
    return this.figure;
  }

  setCalculation(calculation: ECalculations): void {
    this.calculation = calculation;
    console.log(this.calculation);
    this.storageService.setItem('calculation', this.calculation);
  }

  getCalculation(): ECalculations {
    return this.calculation;
  }
}
