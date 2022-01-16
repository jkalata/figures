import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OutputComponent } from './output.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let spectator: Spectator<OutputComponent>;

  const createComponent = createComponentFactory({
    component: OutputComponent,
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
