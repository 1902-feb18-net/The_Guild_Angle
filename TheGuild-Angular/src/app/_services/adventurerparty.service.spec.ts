import { TestBed } from '@angular/core/testing';

import { AdventurerpartyService } from './adventurerparty.service';

describe('AdventurerpartyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdventurerpartyService = TestBed.get(AdventurerpartyService);
    expect(service).toBeTruthy();
  });
});
