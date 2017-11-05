import { async, ComponentFixture, TestBed, tick, inject, fakeAsync } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserViewRoutingModule } from '../../user-view-routing.module';
import { Subject } from 'rxjs/Subject';

import { UserViewComponent } from '../user-view.component';
import { UserViewService } from '../../user-view-service/user-view.service';
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
        FormsModule,
        HttpModule,
        RouterTestingModule,
        UserViewRoutingModule,
      ],
      declarations: [
        UserViewComponent
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

  it('should profile section be visible',
    inject([UserViewService, XHRBackend], (service: UserViewService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(getMock(connection.request.url))
        })));
      });
      params.next({ username: PARAM_USERNAME });
      fixture.detectChanges();
      const profileSection = fixture.nativeElement.querySelector(PROFILE_SECTION_SELECTOR);
      expect(profileSection).toBeTruthy();
    })
  );

  it('should repos section be visible',
    inject([UserViewService, XHRBackend], (service: UserViewService, mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(getMock(connection.request.url))
        })));
      });
      params.next({ username: PARAM_USERNAME });
      fixture.detectChanges();
      const reposSection = fixture.nativeElement.querySelector(REPOS_SECTION_SELECTOR);
      expect(reposSection).toBeTruthy();
    })
  );
});
