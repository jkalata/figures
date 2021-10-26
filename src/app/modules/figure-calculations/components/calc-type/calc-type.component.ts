import { ECalculations } from './../../interfaces/figure.interfaces';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EFigures } from '../../interfaces/figure.interfaces';

@Component({
  selector: 'app-calc-type',
  templateUrl: './calc-type.component.html',
  styleUrls: ['./calc-type.component.scss'],
})
export class CalcTypeComponent implements OnInit {
  calculations = ECalculations;
  @Output() calculationChange: EventEmitter<ECalculations> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
