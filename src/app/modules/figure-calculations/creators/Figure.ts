import { IFigure } from './../interfaces/figure.interfaces';
export abstract class Figure implements IFigure {
  abstract args: any;
  abstract area(): number;
  abstract circumference(): number;
}
