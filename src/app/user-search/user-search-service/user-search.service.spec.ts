import { TestBed, inject, fakeAsync, tick, discardPeriodicTasks } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { UserSearchService } from './user-search.service';
import { SEARCH_TERM, USERS_MOCK } from './user-search-service.test-options';
import { RequestService } from '../../shared/services/request/request.service';


describe('UserSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        RequestService,
        UserSearchService,
      ],
    });
  });

  it('should a list of users',
    fakeAsync(inject([UserSearchService, RequestService],
      (userSearchService: UserSearchService, requestService: RequestService) => {
        spyOn(requestService, 'get').and.returnValue(USERS_MOCK);

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
