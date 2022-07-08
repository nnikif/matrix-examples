import { TestBed } from '@angular/core/testing';

import { InjaclubService } from './injaclub.service';

describe('InjaclubService', () => {
  let service: InjaclubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InjaclubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
