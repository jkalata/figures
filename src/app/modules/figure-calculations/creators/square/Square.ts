import { IFigure, ISquare } from '../../interfaces/figure.interfaces';
export class Square implements IFigure {
  area(args: ISquare): number {
    return args.a * args.a;
  }

  circumference(args: ISquare): number {
    return args.a * 4;
  }
}
