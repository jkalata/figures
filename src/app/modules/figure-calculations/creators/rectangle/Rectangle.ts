import { IRectangle } from '../../interfaces/figure.interfaces';
import { TwoDimensionalFigure } from '../2DFigure';
export class Rectangle implements TwoDimensionalFigure {
  args: IRectangle = {
    a: 0,
    b: 0,
  };
  area(): number {
    return this.args.a * this.args.b;
  }

  circumference(): number {
    return this.args.a * 2 + this.args.b * 2;
  }
}
