import { IFigure, IRectangle } from '../../interfaces/figure.interfaces';
import { Figure } from '../Figure';
export class Rectangle extends Figure {
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
