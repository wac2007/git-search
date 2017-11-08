import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UserViewService } from './user-view.service';
import { USER_NAME, USER_MOCK, USER_REPO_LIST_MOCK, FILTERS_MOCK } from './user-view-service.test-options';


describe('UserViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        UserViewService,
        { provide: XHRBackend, useClass: MockBackend },
      ]
    });
  });

  it('should get the user profile',
    inject([UserViewService, XHRBackend], (service: UserViewService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(USER_MOCK)
        })));
      });

      service.getUserProfileData(USER_NAME).subscribe((response) => {
        expect(response.login).toBe(USER_MOCK.login);
      });
    })
  );

  it('should get the user repos',
    inject([UserViewService, XHRBackend], (service: UserViewService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(USER_REPO_LIST_MOCK)
        })));
      });

      service.getUserReposData(USER_NAME, FILTERS_MOCK).subscribe((response) => {
        expect(response.length).toBe(USER_REPO_LIST_MOCK.length);
      });
    })
  );
});
