import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Subject } from 'rxjs/Subject';

import { UserSearchService } from './user-search.service';
import { users as usersMock } from './githubUserMock';

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

  it('should return an observable list',
    inject([UserSearchService, XHRBackend], (userSearchService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(usersMock)
        })));
      });

      const subjectSearch = new Subject<string>();
      userSearchService.search(subjectSearch).subscribe((usersList) => {
        expect(usersList.items.length).toBe(usersList.length);
      });

      subjectSearch.next('wac');
    })
  );
});
