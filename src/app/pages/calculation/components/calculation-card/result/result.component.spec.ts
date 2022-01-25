import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResultComponent } from './result.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let spectator: Spectator<ResultComponent>;

  const createComponent = createComponentFactory({
    component: ResultComponent,
    imports: [MatFormFieldModule, MatInputModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
