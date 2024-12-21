import { TestBed } from '@angular/core/testing';

import { TailedbeastsapiService } from './tailedbeastsapi.service';

describe('TailedbeastsapiService', () => {
  let service: TailedbeastsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TailedbeastsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
