import { TestBed } from '@angular/core/testing';

import { ItunessearchService } from './itunessearch.service';

describe('ItunessearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItunessearchService = TestBed.get(ItunessearchService);
    expect(service).toBeTruthy();
  });
});
