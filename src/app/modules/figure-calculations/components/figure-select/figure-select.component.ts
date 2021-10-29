import { FigureCreator } from './../../creators/FigureCreator';
import { EFigures } from './../../interfaces/figure.interfaces';
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
    console.log(event.value);
    console.log(
      Object.getOwnPropertyNames(
        Object.getPrototypeOf(new FigureCreator().create(event.value))
      )
    );
    this.figureChange.emit(event.value);
  }
}
