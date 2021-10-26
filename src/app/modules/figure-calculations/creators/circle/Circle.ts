import { IFigure, ICircle } from '../../interfaces/figure.interfaces';
export class Circle implements IFigure {
  area(args: ICircle): number {
    return Math.PI * Math.pow(args.radius, 2);
  }

  circumference(args: ICircle): number {
    return 2 * Math.PI * args.radius;
  }
}
