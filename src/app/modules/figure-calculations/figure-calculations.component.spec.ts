import { CalculationComponent } from './components/calculation/calculation.component';
import { SelectionComponent } from './components/selection/selection.component';
import { FigureCalculationsComponent } from './figure-calculations.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';
import { MockComponents } from 'ng-mocks';
import { ECalculations, Figure } from './interfaces/figure.interfaces';
import { take } from 'rxjs/operators';
describe('FigureCalculationsComponent', () => {
  let component: FigureCalculationsComponent;
  let spectator: Spectator<FigureCalculationsComponent>;

  const createComponent = createComponentFactory({
    component: FigureCalculationsComponent,
    declarations: [MockComponents(SelectionComponent, CalculationComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders SelectionComponent', () => {
    component.step = 'select';
    spectator.detectComponentChanges();
    expect(spectator.query(SelectionComponent)).toBeTruthy();
    expect(spectator.query(CalculationComponent)).not.toBeTruthy();
  });

  it('renders CalculationComponent', () => {
    component.step = 'calculate';
    spectator.detectComponentChanges();
    expect(spectator.query(CalculationComponent)).toBeTruthy();
    expect(spectator.query(SelectionComponent)).not.toBeTruthy();
  });

  it('passes inputs to CalculationComponent', () => {
    component.step = 'calculate';
    component.calculationParams = {
      calculation: ECalculations.area,
      figure: {} as Figure,
    };
    spectator.detectComponentChanges();
    expect(spectator.query(CalculationComponent)?.calculationParams).toEqual(
      component.calculationParams
    );
  });

  it('changes step to calculate when event passed', () => {
    spectator
      .query(SelectionComponent)
      ?.calculationParams.pipe(take(1))
      .subscribe(() => {
        expect(component.step).toBe('calculate');
      });
    spectator.query(SelectionComponent)?.calculationParams.emit();
  });

  it('changes step to select when goToSelection button pressed', () => {
    spectator
      .query(CalculationComponent)
      ?.goToSelection.pipe(take(1))
      .subscribe(() => {
        expect(component.step).toBe('select');
      });
    spectator.query(CalculationComponent)?.goToSelection.emit();
  });
});
