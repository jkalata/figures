import { ITwoDimensionalFigure, FigureParamsUnion } from './figure.interfaces';
export abstract class TwoDimensionalFigure implements ITwoDimensionalFigure {
  abstract args: FigureParamsUnion;
  abstract name: string;
  abstract area(): number;
  abstract perimeter(): number;
}
