import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UserViewService, ORDER_ASC, SORT_BY_CREATE } from './user-view.service';
import { userMock } from './githubUserMock';
import { userReposMock } from './githubUserReposMock';
import { USER_NAME } from './user-view-service.test-options';


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
          body: JSON.stringify(userMock)
        })));
      });

      service.getUserProfileData(USER_NAME).subscribe((response) => {
        expect(response.login).toBe(userMock.login);
      });
    })
  );

  it('should get the user repos',
    inject([UserViewService, XHRBackend], (service: UserViewService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(userReposMock)
        })));
      });

      service.getUserReposData(USER_NAME, SORT_BY_CREATE, ORDER_ASC).subscribe((response) => {
        expect(response.length).toBe(userReposMock.length);
      });
    })
  );
});
