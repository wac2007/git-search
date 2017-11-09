import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { RepoViewService } from './repo-view.service';
import { REPO_NAME, REPO_MOCK } from './repo-view-service.test-options';
import { RequestService } from '../../shared/services/request/request.service';


describe('RepoViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        RepoViewService,
        RequestService,
        { provide: XHRBackend, useClass: MockBackend },
      ],
    });
  });

  it('should get repo information',
    inject([RepoViewService, XHRBackend], (service: RepoViewService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(REPO_MOCK)
        })));
      });

      service.getRepoData(REPO_NAME).subscribe((response) => {
        expect(response.full_name).toBe(REPO_MOCK.full_name);
      });
    })
  );
});
