import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { RepoViewService } from './repo-view.service';
import { repoMock } from './repoMock';
import { REPO_NAME } from './repo-view-service.test-options';



describe('RepoViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      providers: [
        RepoViewService,
        { provide: XHRBackend, useClass: MockBackend },
      ],
    });
  });

  it('should get repo information',
    inject([RepoViewService, XHRBackend], (service: RepoViewService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(repoMock)
        })));
      });

      service.getRepoData(REPO_NAME).subscribe((response) => {
        expect(response.full_name).toBe(repoMock.full_name);
      });
    })
  );
});
