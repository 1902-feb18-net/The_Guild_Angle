import { TestBed } from '@angular/core/testing';

import { RequestinggroupService } from './requestinggroup.service';

describe('RequestinggroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestinggroupService = TestBed.get(RequestinggroupService);
    expect(service).toBeTruthy();
  });
});
