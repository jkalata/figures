import { TranslocoModule } from '@ngneat/transloco';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ParameterFieldsComponent } from './parameter-fields/parameter-fields.component';
import { OutputComponent } from './output/output.component';
import { CalculationCardComponent } from './calculation-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const components = [
  CalculationCardComponent,
  OutputComponent,
  ParameterFieldsComponent,
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    TranslocoModule,
  ],
  exports: [components],
})
export class CalculationCardModule {}
