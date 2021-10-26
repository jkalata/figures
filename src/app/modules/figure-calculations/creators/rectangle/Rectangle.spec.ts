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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calculates area', () => {
    expect(service.area({ a, b })).toBe(a * b);
  });

  it('calculates circumference', () => {
    expect(service.circumference({ a, b })).toBe(a * 2 + b * 2);
  });
});
