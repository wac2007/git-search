import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { UserRepoItemComponent } from '../user-repo-item.component';
import { InfoIconComponent } from '../../../shared/components/info-icon/info-icon.component';

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
        InfoIconComponent,
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

  describe('UserRepoItemComponent: Basic Render', () => {
    it('should render title', () => {
      const htmlElement = fixture.nativeElement.querySelector(TITLE_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
    it('should render stars icon', () => {
      const htmlElement = fixture.nativeElement.querySelector(STARS_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
    it('should render watchers icon', () => {
      const htmlElement = fixture.nativeElement.querySelector(WATCHERS_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
    it('should render external link icon', () => {
      const htmlElement = fixture.nativeElement.querySelector(EXTERNAL_LINK_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
    it('should render description', () => {
      const htmlElement = fixture.nativeElement.querySelector(DESCRIPTION_SELECTOR);
      expect(htmlElement).toBeTruthy();
    });
  });
});
