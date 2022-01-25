import { Figure, FigureParamsUnion } from './../../../figure/figure.interfaces';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-fields',
  templateUrl: './parameter-fields.component.html',
  styleUrls: ['./parameter-fields.component.scss'],
})
export class ParameterFieldsComponent implements OnInit {
  @Input() figure: Figure = {} as Figure;
  @Output() parameterChange = new EventEmitter();
  args!: FigureParamsUnion;

  ngOnInit() {
    this.args = Object.assign(this.figure.args);
  }

  emitParameterChange(event: Event, key: string): void {
    const input = event.target as HTMLInputElement;
    this.args[key] = Number(input.value);
    this.parameterChange.emit(this.args);
  }
}
