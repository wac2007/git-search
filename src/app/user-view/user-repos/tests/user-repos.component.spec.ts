import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { UserReposComponent } from '../user-repos.component';
import { REPOS_MOCK, REPO_ITEM_SELECTOR } from './user-repos.test-options';
import { UserRepoItemComponent } from '../../user-repo-item/user-repo-item.component';


describe('UserReposComponent', () => {
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserRepoItemComponent,
        UserReposComponent,
      ],
      imports: [
        RouterTestingModule,
        Angular2FontawesomeModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
    component.repoList = REPOS_MOCK;
    fixture.detectChanges();
  });

  it('should create repo-items', () => {
    const repoItems = fixture.nativeElement.querySelectorAll(REPO_ITEM_SELECTOR);
    const repoArray = Array.from(repoItems);
    expect(repoArray.length).toBe(REPOS_MOCK.length);
  });
});
