import { TestBed } from '@angular/core/testing';

import { CommunitymashupApiPersonService } from './communitymashup-api-person.service';

describe('CommunitymashupApiPersonService', () => {
  let service: CommunitymashupApiPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommunitymashupApiPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
