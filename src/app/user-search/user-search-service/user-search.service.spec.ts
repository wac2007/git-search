import { TestBed, inject, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Subject } from 'rxjs/Subject';

import { UserSearchService } from './user-search.service';
import { SEARCH_TERM, USERS_MOCK } from './user-search-service.test-options';

describe('UserSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        UserSearchService,
        { provide: XHRBackend, useClass: MockBackend }
      ],
    });
  });

  it('should a list of users',
    fakeAsync(inject([UserSearchService, XHRBackend], (userSearchService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(USERS_MOCK)
        })));
      });

      const subjectSearch = new Subject<string>();
      userSearchService.search(subjectSearch).subscribe((usersList) => {
        expect(usersList.length).toBe(usersList.items.length);
      });

      subjectSearch.next(SEARCH_TERM);
      tick();
      discardPeriodicTasks();
    })
  ));
});
