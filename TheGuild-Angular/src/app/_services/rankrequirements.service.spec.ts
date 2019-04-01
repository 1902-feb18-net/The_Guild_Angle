import { TestBed } from '@angular/core/testing';

import { RankrequirementsService } from './rankrequirements.service';

describe('RankrequirementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RankrequirementsService = TestBed.get(RankrequirementsService);
    expect(service).toBeTruthy();
  });
});
