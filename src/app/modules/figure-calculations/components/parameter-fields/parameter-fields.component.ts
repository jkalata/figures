import { Figure } from './../../interfaces/figure.interfaces';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-parameter-fields',
  templateUrl: './parameter-fields.component.html',
  styleUrls: ['./parameter-fields.component.scss'],
})
export class ParameterFieldsComponent implements OnInit {
  @Input() figure: Figure = {} as Figure;
  @Output() parameterChange = new EventEmitter();

  args: any;

  constructor() {}

  ngOnInit() {
    this.args = this.figure.args;
    console.log(this.figure, this.args);
  }

  updateArgs(): void {}

  emitParameterChange(event: any, key: unknown): void {
    this.args[key as string] = Number(event.target.value);
    this.parameterChange.emit(this.args);
  }
}
