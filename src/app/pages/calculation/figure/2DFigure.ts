import { ITwoDimensionalFigure } from './figure.interfaces';
export abstract class TwoDimensionalFigure implements ITwoDimensionalFigure {
  abstract args: any;
  abstract name: string;
  abstract area(): number;
  abstract perimeter(): number;
}