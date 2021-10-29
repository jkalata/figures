export interface IBasicFigure {
  args: any;
  area(): number;
}

export interface ITwoDimensionalFigure extends IBasicFigure {
  circumference?(): number;
}

export interface IThreeDimensionalFigure extends IBasicFigure {
  volume?(): number;
}
export type Figure = ITwoDimensionalFigure & IThreeDimensionalFigure;

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
  circumference = 'circumference',
}

export interface ICalculationParams {
  figure: Figure;
  calculation: ECalculations;
}
