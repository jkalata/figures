import { EFigures } from './../../../interfaces/figure.interfaces';
import { MatSelectModule } from '@angular/material/select';
import { FigureSelectComponent } from './figure-select.component';
import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';

describe('FigureSelectComponent', () => {
  let component: FigureSelectComponent;
  let spectator: Spectator<FigureSelectComponent>;

  const createComponent = createComponentFactory({
    component: FigureSelectComponent,
    imports: [MatSelectModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('emits figure selection when changed', () => {
    const spy = spyOn(component.figureChange, 'emit');
    spectator.dispatchFakeEvent(
      spectator.queryAll(byTestId('select'))[0],
      'selectionChange'
    );

    expect(spy).toHaveBeenCalled();
  });
});
