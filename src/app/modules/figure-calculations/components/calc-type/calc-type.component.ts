import { ECalculations } from './../../interfaces/figure.interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
