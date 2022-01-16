export type Figure = ITwoDimensionalFigure;
export interface IBasicFigure {
  args: FigureParamsUnion;
  name: string;
  area(): number;
}

export interface ITwoDimensionalFigure extends IBasicFigure {
  perimeter?(): number;
}

export interface IRectangle {
  a: number;
  b: number;
}

export interface ISquare {
  a: number;
}

export interface ICircle {
  radius: number;
}

export enum EFigures {
  rectangle = 'rectangle',
  square = 'square',
  circle = 'circle',
}

export enum ECalculations {
  area = 'area',
  perimeter = 'perimeter',
}

export interface ICalculationParams {
  figure: Figure;
  calculation: ECalculations;
}

export type FigureParamsUnion = IRectangle | ISquare | ICircle;
