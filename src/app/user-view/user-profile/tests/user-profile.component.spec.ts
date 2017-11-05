import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { UserProfileComponent } from '../user-profile.component';
import {
  USER_PROFILE, USERNAME_SELECTOR, USER_PROFILE_LINK_SELECTOR, FOLLOWERS_SELECTOR,
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
      declarations: [ UserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    component.userProfile = USER_PROFILE;
    fixture.detectChanges();
  });

  it('should have user name', () => {
    const selector = fixture.nativeElement.querySelector(USERNAME_SELECTOR);
    expect(selector).toBeTruthy();
  });

  it('should have user external link', () => {
    const selector = fixture.nativeElement.querySelector(USER_PROFILE_LINK_SELECTOR);
    expect(selector).toBeTruthy();
  });

  it('should have user followers', () => {
    const selector = fixture.nativeElement.querySelector(FOLLOWERS_SELECTOR);
    expect(selector).toBeTruthy();
  });

  it('should have user following', () => {
    const selector = fixture.nativeElement.querySelector(FOLLOWING_SELECTOR);
    expect(selector).toBeTruthy();
  });

  it('should have user email', () => {
    const selector = fixture.nativeElement.querySelector(EMAIL_SELECTOR);
    expect(selector).toBeTruthy();
  });

  it('should have user bio', () => {
    const selector = fixture.nativeElement.querySelector(BIO_SELECTOR);
    expect(selector).toBeTruthy();
  });

  it('should have user avatar', () => {
    const selector = fixture.nativeElement.querySelector(AVATAR_SELECTOR);
    expect(selector).toBeTruthy();
  });
});
