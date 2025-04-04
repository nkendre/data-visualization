import { TestBed } from '@angular/core/testing';

import { CricketDataService } from './cricket-data.service';

describe('CricketDataService', () => {
  let service: CricketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CricketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
