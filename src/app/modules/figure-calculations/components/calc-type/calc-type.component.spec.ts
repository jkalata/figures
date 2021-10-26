import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcTypeComponent } from './calc-type.component';

describe('CalcTypeComponent', () => {
  let component: CalcTypeComponent;
  let fixture: ComponentFixture<CalcTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcTypeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
