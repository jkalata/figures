import { MatSelectChange } from '@angular/material/select';
import { EFigures } from './../../../figure/figure.interfaces';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figure-select',
  templateUrl: './figure-select.component.html',
  styleUrls: ['./figure-select.component.scss'],
})
export class FigureSelectComponent {
  @Output() figureChange: EventEmitter<EFigures> = new EventEmitter();
  availableFigures = EFigures;

  emitFigureChange(event: MatSelectChange): void {
    this.figureChange.emit(event.value);
  }
}
