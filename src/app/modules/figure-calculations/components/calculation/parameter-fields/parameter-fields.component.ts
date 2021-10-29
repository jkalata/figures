import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Figure } from '../../../interfaces/figure.interfaces';

@Component({
  selector: 'app-parameter-fields',
  templateUrl: './parameter-fields.component.html',
  styleUrls: ['./parameter-fields.component.scss'],
})
export class ParameterFieldsComponent implements OnInit {
  @Input() figure: Figure = {} as Figure;
  @Output() parameterChange = new EventEmitter();
  args: any;

  ngOnInit() {
    this.args = this.figure.args;
  }

  emitParameterChange(event: any, key: unknown): void {
    this.args[key as string] = Number(event.target.value);
    this.parameterChange.emit(this.args);
  }
}
