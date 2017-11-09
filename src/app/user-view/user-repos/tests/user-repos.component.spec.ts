import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { UserReposComponent } from '../user-repos.component';
import { REPOS_MOCK, REPO_ITEM_SELECTOR } from './user-repos.test-options';
import { UserRepoItemComponent } from '../../user-repo-item/user-repo-item.component';
import { InfoIconComponent } from '../../../shared/components/info-icon/info-icon.component';


describe('UserReposComponent', () => {
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoIconComponent,
        UserRepoItemComponent,
        UserReposComponent,
      ],
      imports: [
        Angular2FontawesomeModule,
        RouterTestingModule,
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
