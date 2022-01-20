import { FigureParamsUnion, ICalculationParams } from './figure.interfaces';

export class FigureCalculator {
  calculateOutput(params: ICalculationParams, args: FigureParamsUnion): number {
    return params.figure[params.calculation] !== undefined
      ? (params.figure[params.calculation] as any)(args)
      : NaN;
  }
}
