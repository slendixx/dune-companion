import { TestBed } from '@angular/core/testing';

import { CombatWheelDialService } from './combat-wheel-dial.service';

describe('CombatWheelDialService', () => {
  let service: CombatWheelDialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombatWheelDialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
