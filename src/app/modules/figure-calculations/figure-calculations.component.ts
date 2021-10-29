import {
  ECalculations,
  Figure,
  ICalculationParams,
} from './interfaces/figure.interfaces';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-figure-calculations',
  templateUrl: './figure-calculations.component.html',
  styleUrls: ['./figure-calculations.component.scss'],
})
export class FigureCalculationsComponent {
  pickedCalculation!: ECalculations;
  pickedFigure!: Figure;
  form: FormGroup;
  output: number = 0;
  calculationParams!: ICalculationParams;

  step: 'select' | 'calculate' = 'select';

  constructor(private fb: FormBuilder) {
    this.form = this.initFormGroup();
  }

  private initFormGroup(): FormGroup {
    return this.fb.group({
      calculation: [null, Validators.required],
      figure: [null, Validators.required],
    });
  }

  changeCalculationParams(event: ICalculationParams): void {
    this.calculationParams = event;
    this.step = 'calculate';
  }
}
