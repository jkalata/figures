import { Figure } from './creators/Figure';
import { ECalculations } from './interfaces/figure.interfaces';
export class FigureCalculator {
  calculateOutput(calculation: ECalculations, figure: Figure): number {
    switch (calculation) {
      case ECalculations.area:
        return figure.area();
      case ECalculations.circumference:
        return figure.circumference();
    }
  }
}
