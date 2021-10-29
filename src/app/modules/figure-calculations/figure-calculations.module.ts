import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcTypeComponent } from './components/selection/calc-type/calc-type.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FigureCalculationsComponent } from './figure-calculations.component';
import { FigureSelectComponent } from './components/selection/figure-select/figure-select.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParameterFieldsComponent } from './components/calculation/parameter-fields/parameter-fields.component';
import { OutputComponent } from './components/calculation/output/output.component';
import { SelectionComponent } from './components/selection/selection.component';
import { CalculationComponent } from './components/calculation/calculation.component';

const materialModules = [
  MatRadioModule,
  MatCardModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    CalcTypeComponent,
    FigureCalculationsComponent,
    FigureSelectComponent,
    ParameterFieldsComponent,
    OutputComponent,
    SelectionComponent,
    CalculationComponent,
  ],
  imports: [CommonModule, materialModules, ReactiveFormsModule, FormsModule],
  exports: [FigureCalculationsComponent],
})
export class FigureCalculationsModule {}
