import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs/Subject';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { UserViewComponent } from '../user-view.component';
import { UserViewService } from '../user-view-service/user-view.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserReposComponent } from '../user-repos/user-repos.component';
import { UserRepoItemComponent } from '../user-repo-item/user-repo-item.component';
import { UserRepoFiltersComponent } from '../user-repo-filters/user-repo-filters.component';
import { ORDER_DESC, SORT_BY_STARS } from '../order.constants';
import { RadioGroupComponent } from '../../shared/components/radio-group/radio-group.component';
import { RadioItemComponent } from '../../shared/components/radio-group/radio-item/radio-item.component';
import { RequestService } from '../../shared/services/request/request.service';
import {
  PROFILE_SECTION_SELECTOR, REPOS_SECTION_SELECTOR, USER_MOCK, USER_REPO_LIST_MOCK,
  PARAM_USERNAME, routeParams,
} from './user-view.test-options';


describe('UserViewComponent', () => {
  let component: UserViewComponent;
  let fixture: ComponentFixture<UserViewComponent>;
  let paramProvider: Subject<Params>;
  let userViewService: UserViewService;
  let routeService: ActivatedRoute;

  beforeEach(async(() => {
    paramProvider = new Subject<Params>();
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule,
        FormsModule,
        HttpModule,
        RouterTestingModule,
      ],
      declarations: [
        RadioGroupComponent,
        RadioItemComponent,
        UserProfileComponent,
        UserRepoFiltersComponent,
        UserRepoItemComponent,
        UserReposComponent,
        UserViewComponent,
      ],
      providers: [
        RequestService,
        UserViewService,
        { provide: ActivatedRoute, useValue: { params: paramProvider }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewComponent);
    component = fixture.componentInstance;
    paramProvider.next(routeParams);
    userViewService = fixture.debugElement.injector.get(UserViewService);
    routeService = fixture.debugElement.injector.get(ActivatedRoute);
    spyOn(userViewService, 'getUserProfileData').and.returnValue(USER_MOCK);
    spyOn(userViewService, 'getUserReposData').and.returnValue(USER_REPO_LIST_MOCK);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('UserViewComponent: Basic Info', () => {
    it('should have profile section', () => {
      routeService.params.subscribe(() => {
        const profileSection = fixture.nativeElement.querySelector(PROFILE_SECTION_SELECTOR);
        expect(profileSection).toBeTruthy();
      });
    });
    it('should have repo list section', () => {
      routeService.params.subscribe(() => {
        const reposSection = fixture.nativeElement.querySelector(REPOS_SECTION_SELECTOR);
        expect(reposSection).toBeTruthy();
      });
    });
  });

  describe('UserViewComponent: Behavior', () => {
    it('should have the right route params', () => {
      routeService.params.subscribe((params) => {
        expect(params.username).toBe(routeParams.username);
      });
    });
    it('should call UserViewService function onInit', () => {
      routeService.params.subscribe(() => {
        expect(userViewService.getUserProfileData).toHaveBeenCalled();
        expect(userViewService.getUserReposData).toHaveBeenCalled();
      });
    });
  });
});
