import { TestBed } from '@angular/core/testing';

import { CharactersapiService } from './charactersapi.service';

describe('CharactersapiService', () => {
  let service: CharactersapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
