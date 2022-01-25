import { TranslocoModule } from '@ngneat/transloco';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CalcTypeComponent } from './calc-type/calc-type.component';
import { FigureSelectComponent } from './figure-select/figure-select.component';
import { SelectionComponent } from './selection.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

const components = [
  SelectionComponent,
  FigureSelectComponent,
  CalcTypeComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    TranslocoModule,
  ],
  exports: components,
})
export class SelectionModule {}
