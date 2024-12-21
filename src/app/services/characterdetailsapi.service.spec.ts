import { TestBed } from '@angular/core/testing';

import { CharacterdetailsapiService } from './characterdetailsapi.service';

describe('CharacterdetailsapiService', () => {
  let service: CharacterdetailsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterdetailsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
