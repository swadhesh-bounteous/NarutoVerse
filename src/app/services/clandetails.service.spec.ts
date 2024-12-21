import { TestBed } from '@angular/core/testing';

import { ClandetailsService } from './clandetails.service';

describe('ClandetailsService', () => {
  let service: ClandetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClandetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
