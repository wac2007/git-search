import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { UserRepoItemComponent } from '../user-repo-item.component';
import {
  REPO_MOCK, TITLE_SELECTOR, STARS_SELECTOR, WATCHERS_SELECTOR, EXTERNAL_LINK_SELECTOR,
  DESCRIPTION_SELECTOR
} from './user-repo-item.test-options';


describe('UserRepoItemComponent', () => {
  let component: UserRepoItemComponent;
  let fixture: ComponentFixture<UserRepoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule,
        RouterTestingModule,
      ],
      declarations: [
        UserRepoItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepoItemComponent);
    component = fixture.componentInstance;
    component.repoItem = REPO_MOCK;
    fixture.detectChanges();
  });

  it('should have listed fields', () => {
    const fields = [
      TITLE_SELECTOR,
      STARS_SELECTOR,
      WATCHERS_SELECTOR,
      EXTERNAL_LINK_SELECTOR,
      DESCRIPTION_SELECTOR,
    ];

    fields.forEach((field) => {
      const selector = fixture.nativeElement.querySelector(field);
      expect(selector).toBeTruthy();
    });
  });
});
