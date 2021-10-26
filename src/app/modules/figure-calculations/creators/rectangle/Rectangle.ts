import { IFigure, IRectangle } from '../../interfaces/figure.interfaces';
export class Rectangle implements IFigure {
  area(args: IRectangle): number {
    return args.a * args.b;
  }

  circumference(args: IRectangle): number {
    return args.a * 2 + args.b * 2;
  }
}
