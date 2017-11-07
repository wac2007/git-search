import { async, ComponentFixture, TestBed, tick, inject, fakeAsync } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs/Subject';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { UserViewComponent } from '../user-view.component';
import {
  UserViewService, ORDER_DESC, SORT_BY_STARS,
} from '../../user-view-service/user-view.service';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { UserReposComponent } from '../../user-repos/user-repos.component';
import { UserRepoItemComponent } from '../../user-repo-item/user-repo-item.component';
import { UserRepoFiltersComponent } from '../../user-repo-filters/user-repo-filters.component';

import { userMock } from '../../user-view-service/githubUserMock';
import {
  PROFILE_SECTION_SELECTOR, REPOS_SECTION_SELECTOR, getMock,
  PARAM_USERNAME,
} from './user-view.test-options';


describe('UserViewComponent', () => {
  let component: UserViewComponent;
  let fixture: ComponentFixture<UserViewComponent>;
  let params: Subject<Params>;

  beforeEach(async(() => {
    params = new Subject<Params>();
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule,
        FormsModule,
        HttpModule,
        RouterTestingModule,
      ],
      declarations: [
        UserProfileComponent,
        UserRepoFiltersComponent,
        UserRepoItemComponent,
        UserReposComponent,
        UserViewComponent,
      ],
      providers: [
        UserViewService,
        { provide: ActivatedRoute, useValue: { params: params }},
        { provide: XHRBackend, useClass: MockBackend },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have profile section',
    fakeAsync(inject([UserViewService, XHRBackend], (service: UserViewService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(getMock(connection.request.url))
        })));
      });
      params.next({ username: PARAM_USERNAME });
      tick();
      fixture.detectChanges();
      const profileSection = fixture.nativeElement.querySelector(PROFILE_SECTION_SELECTOR);
      expect(profileSection).toBeTruthy();
    })
  ));

  it('should have repo listing',
    fakeAsync(inject([UserViewService, XHRBackend], (service: UserViewService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(getMock(connection.request.url))
        })));
      });
      params.next({ username: PARAM_USERNAME });
      component.getRepos({
        order: ORDER_DESC,
        sort: SORT_BY_STARS,
      });
      tick();
      fixture.detectChanges();
      const reposSection = fixture.nativeElement.querySelector(REPOS_SECTION_SELECTOR);
      expect(reposSection).toBeTruthy();
    })
  ));
});
