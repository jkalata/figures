import { Rectangle } from './Rectangle';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

describe('Rectangle', () => {
  let spectator: SpectatorService<Rectangle>;
  let service: Rectangle;

  const a = 2;
  const b = 3;

  const createService = createServiceFactory({
    service: Rectangle,
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    service.args = { a, b };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calculates area', () => {
    expect(service.area()).toBe(a * b);
  });

  it('calculates perimeter', () => {
    expect(service.perimeter()).toBe(a * 2 + b * 2);
  });
});
