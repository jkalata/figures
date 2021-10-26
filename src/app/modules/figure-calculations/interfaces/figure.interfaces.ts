export interface IFigure {
  area(args: any): number;
  circumference(args: any): number;
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
  circumference = 'circumference',
}
