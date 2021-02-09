import { TestBed } from '@angular/core/testing';

import { CwiczeniaService } from './cwiczenia.service';

describe('CwiczeniaService', () => {
  let service: CwiczeniaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CwiczeniaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
