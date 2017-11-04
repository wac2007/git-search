import { async, ComponentFixture, TestBed, tick, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserViewRoutingModule } from '../../user-view-routing.module';
import { Subject } from 'rxjs/Subject';

import { UserViewComponent } from '../user-view.component';
import { UserViewService } from '../../user-view-service/user-view.service';
import { userMock } from '../../user-view-service/githubUserMock';
import { PROFILE_SECTION_SELECTOR, REPOS_SECTION_SELECTOR } from './user-view.test-options';


describe('UserViewComponent', () => {
  let component: UserViewComponent;
  let fixture: ComponentFixture<UserViewComponent>;
  let params: Subject<Params>;

  beforeEach(async(() => {
    params = new Subject<Params>();
    TestBed.configureTestingModule({
      imports: [
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

  beforeEach(
    inject([XHRBackend], (mockBackend) => {
      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(userMock)
        })));
      });
      fixture = TestBed.createComponent(UserViewComponent);
      component = fixture.componentInstance;
      params.next({ username: 'wac2007' });
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should profile info be visible', () => {
    const profileSection = fixture.nativeElement.querySelector(PROFILE_SECTION_SELECTOR);
    expect(profileSection.is(':visible')).toBeTruthy();
  });
});
