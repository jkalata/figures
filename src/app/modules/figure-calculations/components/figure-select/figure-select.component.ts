import { EFigures } from './../../interfaces/figure.interfaces';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-figure-select',
  templateUrl: './figure-select.component.html',
  styleUrls: ['./figure-select.component.scss'],
})
export class FigureSelectComponent {
  figures = EFigures;
  @Output() figureChange: EventEmitter<EFigures> = new EventEmitter();
  constructor() {}
}
