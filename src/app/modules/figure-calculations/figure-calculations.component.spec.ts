import { CalcTypeComponent } from './components/calc-type/calc-type.component';
import { FigureCalculationsComponent } from './figure-calculations.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponent, MockComponents } from 'ng-mocks';

describe('FigureCalculationsComponent', () => {
  let component: FigureCalculationsComponent;
  let spectator: Spectator<FigureCalculationsComponent>;

  const createComponent = createComponentFactory({
    component: FigureCalculationsComponent,
    declarations: [MockComponents(CalcTypeComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders PickCalcTypeComponent', () => {
    expect(spectator.query(CalcTypeComponent)).toBeTruthy();
  });
});
