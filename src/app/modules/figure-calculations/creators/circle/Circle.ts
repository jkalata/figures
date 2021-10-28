import { EFigures } from './../../interfaces/figure.interfaces';
import { IFigure, ICircle } from '../../interfaces/figure.interfaces';
import { Figure } from '../Figure';
export class Circle extends Figure {
  args: ICircle = {
    radius: 0,
  };

  type = EFigures.circle;

  area(): number {
    return Math.PI * Math.pow(this.args.radius, 2);
  }

  circumference(): number {
    return 2 * Math.PI * this.args.radius;
  }
}
