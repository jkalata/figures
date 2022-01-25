import { DateTime } from 'luxon';
import { ICalculatorHistoryStored } from './../../../dashboard/components/history/interfaces/history.interfaces';
import { HistoryService } from './../../../../services/history.service';
import { FigureCalculator } from './../../figure/FigureCalculator';
import {
  ICalculationParams,
  FigureParamsUnion,
} from './../../figure/figure.interfaces';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-calculation-card',
  templateUrl: './calculation-card.component.html',
  styleUrls: ['./calculation-card.component.scss'],
})
export class CalculationCardComponent {
  @Input() calculationParams: ICalculationParams = {} as ICalculationParams;
  @Output() back = new EventEmitter();

  calculationResult: number = 0;
  params!: FigureParamsUnion;
  figureCalculator = new FigureCalculator();

  constructor(private historyService: HistoryService) {}

  changeParams(args: FigureParamsUnion): void {
    this.params = args;
  }

  calculate(calculationParams: ICalculationParams): void {
    if (calculationParams !== null) {
      this.calculationResult = this.performCalculation(calculationParams);
      this.addHistoryEntry(calculationParams);
    }
  }

  private performCalculation(calculationParams: ICalculationParams): number {
    return this.figureCalculator.calculateOutput(
      calculationParams,
      this.params
    );
  }

  private addHistoryEntry(calculationParams: ICalculationParams): void {
    const entry: ICalculatorHistoryStored = {
      date: DateTime.now().toMillis(),
      args: this.params,
      calculation: calculationParams.calculation,
      figure: calculationParams.figure.name,
      output: this.calculationResult,
    };
    this.historyService.addHistoryEntry(entry);
  }

  emitBack() {
    this.back.emit();
  }
}
