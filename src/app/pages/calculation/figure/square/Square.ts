import { ISquare } from './../figure.interfaces';
import { TwoDimensionalFigure } from '../2DFigure';
export class Square extends TwoDimensionalFigure {
  name = 'Square';
  constructor() {
    super();
  }
  args: ISquare = {
    a: 0,
  };

  area(): number {
    return Math.pow(this.args.a, 2);
  }

  perimeter(): number {
    return 4 * this.args.a;
  }
}
