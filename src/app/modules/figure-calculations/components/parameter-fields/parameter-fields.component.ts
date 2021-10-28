import { ParameterFieldsCreator } from './../../creators/parameter-fields/ParameterFieldsCreator';
import { FormGroup } from '@angular/forms';
import { IFigure } from './../../interfaces/figure.interfaces';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-fields',
  templateUrl: './parameter-fields.component.html',
  styleUrls: ['./parameter-fields.component.scss'],
})
export class ParameterFieldsComponent implements OnInit {
  @Input() figure: IFigure = {} as IFigure;
  @Output() parameterChange = new EventEmitter();

  args: any;

  constructor() {}

  ngOnInit() {
    this.args = this.figure.args;
  }

  updateArgs(event: any, key: unknown): void {
    this.args[key as string] = Number(event.target.value);
  }

  emitParameterChange(): void {
    this.parameterChange.emit(this.args);
  }
}
