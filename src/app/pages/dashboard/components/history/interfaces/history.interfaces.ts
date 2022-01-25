import { FigureParamsUnion } from './../../../../calculation/figure/figure.interfaces';
export interface ICalculatorHistoryStored {
  date: number;
  figure: string;
  calculation: string;
  args: FigureParamsUnion;
  output: number;
}

export interface ICalculatorHistory {
  date: string;
  figure: string;
  calculation: string;
  args: FigureParamsUnion;
  output: number;
}
