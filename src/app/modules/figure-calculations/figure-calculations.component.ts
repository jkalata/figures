import { FigureCalculator } from './FigureCalculator';
import { FigureCreator } from './creators/FigureCreator';
import {
  IFigure,
  EFigures,
  ECalculations,
} from './interfaces/figure.interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-figure-calculations',
  templateUrl: './figure-calculations.component.html',
  styleUrls: ['./figure-calculations.component.scss'],
})
export class FigureCalculationsComponent {
  pickedCalculation!: ECalculations;
  pickedFigure!: IFigure;
  form: FormGroup;
  output: number = 0;

  constructor(private fb: FormBuilder) {
    this.form = this.initFormGroup();
  }

  private initFormGroup(): FormGroup {
    return this.fb.group({
      calculation: [null, Validators.required],
      figure: [null, Validators.required],
    });
  }

  changeFigure(figure: EFigures): void {
    this.pickedFigure = new FigureCreator().create(figure);
  }

  changeCalculation(calculation: ECalculations): void {
    this.pickedCalculation = calculation;
  }

  updateFigureArgs(event: any): void {
    this.pickedFigure.args = event;
    this.calculate();
  }

  calculate() {
    this.output = new FigureCalculator().calculateOutput(
      this.pickedCalculation,
      this.pickedFigure
    );
  }
}
