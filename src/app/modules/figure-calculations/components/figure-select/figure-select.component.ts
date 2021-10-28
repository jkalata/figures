import { EFigures } from './../../interfaces/figure.interfaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-figure-select',
  templateUrl: './figure-select.component.html',
  styleUrls: ['./figure-select.component.scss'],
})
export class FigureSelectComponent {
  @Output() figureChange: EventEmitter<EFigures> = new EventEmitter();

  figures = EFigures;

  emitFigureChange(event: any): void {
    console.log(event.value);
    this.figureChange.emit(event.value);
  }
}
