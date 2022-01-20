import { Figure, EFigures } from './figure.interfaces';
import { Square } from './square/Square';
import { Rectangle } from './rectangle/Rectangle';
import { Circle } from './circle/Circle';
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
