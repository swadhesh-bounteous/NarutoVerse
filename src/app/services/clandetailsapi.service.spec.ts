import { TestBed } from '@angular/core/testing';

import { ClandetailsapiService } from './clandetailsapi.service';

describe('ClandetailsapiService', () => {
  let service: ClandetailsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClandetailsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
