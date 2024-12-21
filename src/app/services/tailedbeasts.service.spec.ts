import { TestBed } from '@angular/core/testing';

import { TailedbeastsService } from './tailedbeasts.service';

describe('TailedbeastsService', () => {
  let service: TailedbeastsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailedbeastsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
