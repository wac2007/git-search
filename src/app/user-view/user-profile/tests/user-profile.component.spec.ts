import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { InfoIconComponent } from '../../../shared/components/info-icon/info-icon.component';
import { UserProfileComponent } from '../user-profile.component';
import {
  USER_PROFILE_MOCK, USERNAME_SELECTOR, USER_PROFILE_LINK_SELECTOR, FOLLOWERS_SELECTOR,
  FOLLOWING_SELECTOR, EMAIL_SELECTOR, BIO_SELECTOR, AVATAR_SELECTOR
} from './user-profile.test-options';


describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule,
      ],
      declarations: [
        InfoIconComponent,
        UserProfileComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    component.userProfile = USER_PROFILE_MOCK;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('UserProfileComponent: Basic Render', () => {
    it('should render username', () => {
      const htmlElement = fixture.nativeElement.querySelector(USERNAME_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
    it('should render link', () => {
      const htmlElement = fixture.nativeElement.querySelector(USER_PROFILE_LINK_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
    it('should render info followers', () => {
      const htmlElement = fixture.nativeElement.querySelector(FOLLOWERS_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
    it('should render following', () => {
      const htmlElement = fixture.nativeElement.querySelector(FOLLOWING_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
    it('should render user email', () => {
      const htmlElement = fixture.nativeElement.querySelector(EMAIL_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
    it('should render bio description', () => {
      const htmlElement = fixture.nativeElement.querySelector(BIO_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
    it('should render image avatar', () => {
      const htmlElement = fixture.nativeElement.querySelector(AVATAR_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
  });

});
