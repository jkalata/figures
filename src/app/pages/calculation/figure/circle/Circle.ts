import { ICircle } from './../figure.interfaces';
import { TwoDimensionalFigure } from '../2DFigure';
export class Circle extends TwoDimensionalFigure {
  name = 'Circle';

  args: ICircle = {
    radius: 0,
  };
  area(): number {
    return Math.PI * Math.pow(this.args.radius, 2);
  }

  perimeter(): number {
    return 2 * Math.PI * this.args.radius;
  }
}
