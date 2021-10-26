import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureSelectComponent } from './figure-select.component';

describe('FigureSelectComponent', () => {
  let component: FigureSelectComponent;
  let fixture: ComponentFixture<FigureSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigureSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigureSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
