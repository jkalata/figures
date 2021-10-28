import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterFieldsComponent } from './parameter-fields.component';

describe('ParameterFieldsComponent', () => {
  let component: ParameterFieldsComponent;
  let fixture: ComponentFixture<ParameterFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
