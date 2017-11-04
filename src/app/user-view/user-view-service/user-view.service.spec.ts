import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UserViewService } from './user-view.service';
import { userMock } from './githubUserMock';
import { userReposMock } from './githubUserReposMock';

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

      service.getUserProfileData('wac2007').subscribe((response) => {
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

      service.getUserReposData('wac2007').subscribe((response) => {
        expect(response.length).toBe(userReposMock.length);
      });
    })
  );
});
