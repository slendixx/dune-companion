import { TestBed } from '@angular/core/testing';

import { CombatSpendingService } from './combat-spending.service';

describe('CommitedTroopsService', () => {
  let service: CombatSpendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CombatSpendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
