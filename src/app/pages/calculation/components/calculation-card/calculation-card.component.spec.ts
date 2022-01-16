import { take } from 'rxjs/operators';
import {
  ICalculationParams,
  ECalculations,
  Figure,
} from './../../../../modules/figure-calculations/interfaces/figure.interfaces';
import { ParameterFieldsComponent } from './parameter-fields/parameter-fields.component';
import { OutputComponent } from './output/output.component';
import { MockComponents } from 'ng-mocks';
import { CalculationCardComponent } from './calculation-card.component';
import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';

describe('CalculationComponent', () => {
  let component: CalculationCardComponent;
  let spectator: Spectator<CalculationCardComponent>;
  const calculationParams: ICalculationParams = {
    calculation: ECalculations.area,
    figure: {} as Figure,
  };
  const createComponent = createComponentFactory({
    component: CalculationCardComponent,
    declarations: [MockComponents(OutputComponent, ParameterFieldsComponent)],
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        calculationParams,
      },
    });
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ParameterFiledsComponent', () => {
    it('renders ParameterFieldsComponent', () => {
      expect(spectator.query(ParameterFieldsComponent)).toBeTruthy();
    });

    it('passes inputs to ParameterFieldsComponent', () => {
      expect(spectator.query(ParameterFieldsComponent)?.figure).toEqual(
        component.calculationParams.figure
      );
    });

    it('calls FigureCalculator when event passed', () => {
      const spy = spyOn(component.figureCalculator, 'calculateOutput');
      spectator
        .query(ParameterFieldsComponent)
        ?.parameterChange.pipe(take(1))
        .subscribe(() => {
          expect(spy).toHaveBeenCalled();
        });
      spectator.query(ParameterFieldsComponent)?.parameterChange.emit();
    });
  });

  describe('OutputComponent', () => {
    it('renders OutputComponent', () => {
      expect(spectator.query(OutputComponent)).toBeTruthy();
    });

    it('passes inputs to OutputComponent', () => {
      expect(spectator.query(OutputComponent)?.output).toBe(component.output);
    });
  });

  it('emits goToSelection event when button clicked', () => {
    const spy = spyOn(component.goToSelection, 'emit');
    spectator.click(byTestId('goback-button'));
    expect(spy).toHaveBeenCalled();
  });
});
