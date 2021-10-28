import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParameterFieldInterface } from './ParameterFieldInterface';

export class RectangleFieldsCreator implements ParameterFieldInterface {
  create(): FormGroup {
    return new FormGroup({
      a: new FormControl(0, Validators.required),
      b: new FormControl(0, Validators.required),
    });
  }
}
