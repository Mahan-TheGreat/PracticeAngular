import { TestBed } from '@angular/core/testing';

import { DispencaryService } from './dispencary.service';

describe('DispencaryService', () => {
  let service: DispencaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispencaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
