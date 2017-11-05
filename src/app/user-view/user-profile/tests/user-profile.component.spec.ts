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
      declarations: [
        UserProfileComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    component.userProfile = USER_PROFILE;
    fixture.detectChanges();
  });

  it('should have listed fields', () => {
    const fields = [
      USERNAME_SELECTOR,
      USER_PROFILE_LINK_SELECTOR,
      FOLLOWERS_SELECTOR,
      FOLLOWING_SELECTOR,
      EMAIL_SELECTOR,
      BIO_SELECTOR,
      AVATAR_SELECTOR
    ];

    fields.forEach((field) => {
      const selector = fixture.nativeElement.querySelector(field);
      expect(selector).toBeTruthy();
    });
  });
});
