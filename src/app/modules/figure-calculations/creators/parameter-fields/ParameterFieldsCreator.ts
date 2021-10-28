import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IFigure } from './../../interfaces/figure.interfaces';

export class ParameterFieldsCreator {
  private formBuilder = new FormBuilder();

  createFormGroup(figure: IFigure): FormGroup {
    const form = this.formBuilder.group({});
    Object.keys(figure.args).forEach((arg) => {
      form.addControl(arg, new FormControl(0, Validators.required));
    });
    return form;
  }
}
