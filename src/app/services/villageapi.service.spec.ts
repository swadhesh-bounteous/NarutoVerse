import { TestBed } from '@angular/core/testing';

import { VillageapiService } from './villageapi.service';

describe('VillageapiService', () => {
  let service: VillageapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VillageapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
