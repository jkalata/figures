import { Rectangle } from './../rectangle/Rectangle';
import { IRectangle } from './../../interfaces/figure.interfaces';
export class Square extends Rectangle {
  args: IRectangle = {
    a: 0,
    b: this.args.a,
  };
}
