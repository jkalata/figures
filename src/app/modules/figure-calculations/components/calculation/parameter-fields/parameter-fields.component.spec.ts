import { Figure } from './../../../interfaces/figure.interfaces';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ParameterFieldsComponent } from './parameter-fields.component';
import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';

describe('ParameterFieldsComponent', () => {
  let component: ParameterFieldsComponent;
  let spectator: Spectator<ParameterFieldsComponent>;
  const args = {
    a: 0,
    b: 0,
  };
  const createComponent = createComponentFactory({
    component: ParameterFieldsComponent,
    imports: [MatFormFieldModule, MatInputModule],
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        figure: { ...({} as Figure), args },
      },
    });
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits changed value when input change triggered', () => {
    const spy = spyOn(component.parameterChange, 'emit');
    spectator.dispatchFakeEvent(
      spectator.queryAll(byTestId('input'))[0],
      'change'
    );
    expect(spy).toHaveBeenCalled();
  });
});
