import { TestBed } from '@angular/core/testing';

import { PomiarService } from './pomiar.service';

describe('PomiarService', () => {
  let service: PomiarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PomiarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
