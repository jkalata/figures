import { ICircle } from '../../interfaces/figure.interfaces';
import { TwoDimensionalFigure } from '../2DFigure';
export class Circle extends TwoDimensionalFigure {
  args: ICircle = {
    radius: 0,
  };
  area(): number {
    return Math.PI * Math.pow(this.args.radius, 2);
  }

  circumference(): number {
    return 2 * Math.PI * this.args.radius;
  }
}
