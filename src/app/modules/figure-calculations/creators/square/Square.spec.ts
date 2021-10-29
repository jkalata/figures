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
    service.args = { a };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calculates area', () => {
    expect(service.area()).toBe(Math.pow(a, 2));
  });

  it('calculates perimeter', () => {
    expect(service.perimeter()).toBe(a * 4);
  });
});
