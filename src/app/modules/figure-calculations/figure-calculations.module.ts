import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcTypeComponent } from './components/calc-type/calc-type.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FigureCalculationsComponent } from './figure-calculations.component';
import { FigureSelectComponent } from './components/figure-select/figure-select.component';

const materialModules = [MatRadioModule, MatCardModule, MatSelectModule];

@NgModule({
  declarations: [
    CalcTypeComponent,
    FigureCalculationsComponent,
    FigureSelectComponent,
  ],
  imports: [CommonModule, materialModules],
  exports: [FigureCalculationsComponent],
})
export class FigureCalculationsModule {}
