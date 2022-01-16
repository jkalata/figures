import { EFigures } from './../../../../../interfaces/figure.interfaces';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figure-select',
  templateUrl: './figure-select.component.html',
  styleUrls: ['./figure-select.component.scss'],
})
export class FigureSelectComponent {
  @Output() figureChange: EventEmitter<EFigures> = new EventEmitter();
  availableFigures = EFigures;

  emitFigureChange(event: any): void {
    this.figureChange.emit(event.value);
  }
}
