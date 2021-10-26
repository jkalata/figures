import { FigureCalculationsComponent } from './modules/figure-calculations/figure-calculations.component';
import { MockComponent } from 'ng-mocks';
import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('AppComponent', () => {
  let component: AppComponent;
  let spectator: Spectator<AppComponent>;

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [MockComponent(FigureCalculationsComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders FigureCalculationsComponent', () => {
    expect(spectator.query(FigureCalculationsComponent)).toBeTruthy();
  });
});
