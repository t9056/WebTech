import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommunityMashupApiPersonService } from './communitymashup-api-person.service';

describe('CommunityMashupApiPersonService', () => {
  let service: CommunityMashupApiPersonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CommunityMashupApiPersonService]
    });
    service = TestBed.inject(CommunityMashupApiPersonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch persons', () => {
    const dummyPersons = [
      { type: 'data:person', name: 'John Doe' },
      { type: 'data:person', name: 'Jane Doe' }
    ];

    service.getPersons().subscribe(persons => {
      expect(persons.length).toBe(2);
      expect(persons).toEqual(dummyPersons);
    });

    const req = httpMock.expectOne('https://cmnet.communitymashup.net/json/');
    expect(req.request.method).toBe('GET');
    req.flush(dummyPersons);
  });

  afterEach(() => {
    httpMock.verify();
  });
});