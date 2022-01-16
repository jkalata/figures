import { CalcTypeComponent } from './calc-type.component';
import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';

describe('CalcTypeComponent', () => {
  let component: CalcTypeComponent;
  let spectator: Spectator<CalcTypeComponent>;

  const possibleCalculations = ['area', 'perimeter'];

  const createComponent = createComponentFactory({
    component: CalcTypeComponent,
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        calculations: possibleCalculations,
      },
    });
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders radio buttons n times', () => {
    const n = possibleCalculations.length;
    expect(spectator.queryAll(byTestId('calc'))).toHaveLength(n);
  });

  it('emits event when radio button clicked', () => {
    const spy = spyOn(component.calculationChange, 'emit');
    spectator.dispatchFakeEvent(
      spectator.queryAll(byTestId('calc'))[0],
      'change'
    );
    spectator.detectComponentChanges();

    expect(spy).toHaveBeenCalled();
  });
});
