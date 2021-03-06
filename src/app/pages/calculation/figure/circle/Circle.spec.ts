import { Circle } from './Circle';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

describe('Circle', () => {
  let spectator: SpectatorService<Circle>;
  let service: Circle;

  const radius = 2;

  const createService = createServiceFactory({
    service: Circle,
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    service.args = { r: radius };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calculates area', () => {
    expect(service.area()).toBe(Math.PI * Math.pow(radius, 2));
  });

  it('calculates perimeter', () => {
    expect(service.perimeter()).toBe(2 * Math.PI * radius);
  });
});
