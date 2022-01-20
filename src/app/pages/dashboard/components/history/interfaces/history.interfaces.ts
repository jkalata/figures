import { DateTime } from 'luxon';
import { FigureParamsUnion } from './../../../../calculation/figure/figure.interfaces';

export interface ICalculatorHistoryStored {
  date: number;
  figure: string;
  calculation: string;
  args: any;
  output: number;
}

export interface ICalculatorHistory {
  date: string;
  figure: string;
  calculation: string;
  args: any;
  output: number;
}
