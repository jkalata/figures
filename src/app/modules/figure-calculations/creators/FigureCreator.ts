import { Square } from './square/Square';
import { Rectangle } from './rectangle/Rectangle';
import { Circle } from './circle/Circle';
import { EFigures } from './../interfaces/figure.interfaces';
import { IFigure } from '../interfaces/figure.interfaces';
import { Figure } from './Figure';
export class FigureCreator {
  create(figure: EFigures): Figure {
    switch (figure) {
      case EFigures.circle:
        return new Circle();
      case EFigures.rectangle:
        return new Rectangle();
      case EFigures.square:
        return new Square();
    }
  }
}
