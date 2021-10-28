import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParameterFieldInterface } from './ParameterFieldInterface';

export class SquareFieldsCreator implements ParameterFieldInterface {
  create(): FormGroup {
    return new FormGroup({
      a: new FormControl(0, Validators.required),
    });
  }
}
