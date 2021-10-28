import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ParameterFieldInterface } from './ParameterFieldInterface';
export class CircleFieldsCreator implements ParameterFieldInterface {
  create(): FormGroup {
    return new FormGroup({
      radius: new FormControl(0, Validators.required),
    });
  }
}
