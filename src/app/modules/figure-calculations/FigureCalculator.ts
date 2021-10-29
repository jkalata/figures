import { ICalculationParams } from './interfaces/figure.interfaces';
export class FigureCalculator {
  calculateOutput(params: ICalculationParams, args: any): number {
    return params.figure[params.calculation] !== undefined
      ? (params.figure[params.calculation] as any)(args)
      : NaN;
  }
}
