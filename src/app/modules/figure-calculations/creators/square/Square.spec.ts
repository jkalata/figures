import { Square } from './Square';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

describe('Square', () => {
  let spectator: SpectatorService<Square>;
  let service: Square;
  const a = 2;

  const createService = createServiceFactory({
    service: Square,
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calculates area', () => {
    expect(service.area({ a })).toBe(Math.pow(a, 2));
  });

  it('calculates circumference', () => {
    expect(service.circumference({ a })).toBe(a * 4);
  });
});
