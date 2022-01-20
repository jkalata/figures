import {
  ITwoDimensionalFigure,
  ECalculations,
} from './../../interfaces/figure.interfaces';
import { MockComponents } from 'ng-mocks';
import { CalcTypeComponent } from './calc-type/calc-type.component';
import { FigureSelectComponent } from './figure-select/figure-select.component';
import { SelectionComponent } from './selection.component';
import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';
import {
  EFigures,
  Figure,
  ICalculationParams,
} from '../../interfaces/figure.interfaces';
describe('SelectionComponent', () => {
  let component: SelectionComponent;
  let spectator: Spectator<SelectionComponent>;

  const createComponent = createComponentFactory({
    component: SelectionComponent,
    declarations: [MockComponents(FigureSelectComponent, CalcTypeComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('FigureSelectComponent', () => {
    it('renders FigureSelectComponent', () => {
      expect(spectator.query(FigureSelectComponent)).toBeTruthy();
    });

    it('creates Figure object on selection change', () => {
      const spy = spyOn(component['figureCreator'], 'create');
      spectator
        .query(FigureSelectComponent)
        ?.figureChange.emit(EFigures.circle);
      expect(spy).toHaveBeenCalled();
    });

    it('gets possible calculations on selection change', () => {
      spectator
        .query(FigureSelectComponent)
        ?.figureChange.emit(EFigures.circle);
      expect(component.possibleCalculations).toEqual(['area', 'perimeter']);
    });
  });

  describe('CalcTypeComponent', () => {
    beforeEach(() => {
      spectator
        .query(FigureSelectComponent)
        ?.figureChange.emit(EFigures.circle);
      spectator.detectComponentChanges();
    });

    it('renders CalcTypeComponent', () => {
      expect(spectator.query(CalcTypeComponent)).toBeTruthy();
    });

    it('passes inputs to CalcTypeComponent', () => {
      expect(spectator.query(CalcTypeComponent)?.calculations).toEqual(
        component.possibleCalculations
      );
    });

    it('changes calculation type on selection change', () => {
      spectator
        .query(CalcTypeComponent)
        ?.calculationChange.emit(ECalculations.area);
      expect(component.calculation).toBe(ECalculations.area);
    });
  });

  it('emits calculation params on button click', () => {
    component.figure = {} as Figure;
    component.calculation = ECalculations.area;
    const calculationParams: ICalculationParams = {
      calculation: component.calculation,
      figure: component.figure,
    };
    spectator.detectComponentChanges();
    const spy = spyOn(component.calculationParams, 'emit');
    spectator.click(byTestId('next'));
    expect(spy).toHaveBeenCalledWith(calculationParams);
  });
});
