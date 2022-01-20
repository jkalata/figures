import { ECalculations } from './../../../figure/figure.interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-type',
  templateUrl: './calc-type.component.html',
  styleUrls: ['./calc-type.component.scss'],
})
export class CalcTypeComponent {
  @Input() calculations: string[] = [];
  @Output() calculationChange: EventEmitter<ECalculations> = new EventEmitter();

  emitCalcChange(event: any): void {
    this.calculationChange.emit(event.value);
  }
}
