import { TestBed } from '@angular/core/testing';

import { ExpressserviceService } from './expressservice.service';

describe('ExpressserviceService', () => {
  let service: ExpressserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpressserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
