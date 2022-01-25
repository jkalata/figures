import { ICircle } from './../figure.interfaces';
import { TwoDimensionalFigure } from '../2DFigure';
export class Circle extends TwoDimensionalFigure {
  name = 'Circle';

  args: ICircle = {
    r: 0,
  };
  area(): number {
    return Math.PI * Math.pow(this.args.r, 2);
  }

  perimeter(): number {
    return 2 * Math.PI * this.args.r;
  }
}
