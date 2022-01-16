import { IRectangle } from '../../interfaces/figure.interfaces';
import { TwoDimensionalFigure } from '../2DFigure';
export class Rectangle implements TwoDimensionalFigure {
  name = 'Rectangle';
  args: IRectangle = {
    a: 0,
    b: 0,
  };
  area(): number {
    return this.args.a * this.args.b;
  }

  perimeter(): number {
    if (this.args.a === 0 || this.args.b === 0) {
      return 0;
    } else {
      return this.args.a * 2 + this.args.b * 2;
    }
  }
}
