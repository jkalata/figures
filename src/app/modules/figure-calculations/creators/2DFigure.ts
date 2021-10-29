import { ITwoDimensionalFigure } from './../interfaces/figure.interfaces';
export abstract class TwoDimensionalFigure implements ITwoDimensionalFigure {
  args: any;
  abstract area(): number;
  abstract circumference(): number;
}
