import { Figure, FigureParamsUnion } from './../../../figure/figure.interfaces';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parameter-fields',
  templateUrl: './parameter-fields.component.html',
  styleUrls: ['./parameter-fields.component.scss'],
})
export class ParameterFieldsComponent {
  @Input() figure: Figure = {} as Figure;
  @Output() parameterChange: EventEmitter<FigureParamsUnion> =
    new EventEmitter();

  emitParameterChange(event: Event, key: string): void {
    const input = event.target as HTMLInputElement;
    this.figure.args[key] = Number(input.value);
    this.parameterChange.emit(this.figure.args);
  }
}
