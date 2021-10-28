export interface IFigure {
  args: any;
  area(): number;
  circumference(): number;
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
