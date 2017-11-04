import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { UserSearchComponent } from '../user-search.component';
import { TABLE_SELECTOR, RESULT_SELECTOR, INPUT_SELECTOR } from './user-search.test-options';
import { UserSearchService } from '../user-search-service/user-search.service';
import { users as usersMock } from '../user-search-service/githubUserMock';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
      ],
      declarations: [
        UserSearchComponent,
      ],
      providers: [
        UserSearchService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide results when are nothing to display', () => {
    const table = fixture.nativeElement.querySelector(TABLE_SELECTOR);
    expect(table).toBeFalsy();
  });

  it('should render table results', () => {
      component.results = usersMock.items;
      fixture.detectChanges();
      const htmlResults = fixture.nativeElement.querySelectorAll(RESULT_SELECTOR);
      const arrayResult = Array.from(htmlResults);
      expect(arrayResult.length).toBe(component.resultDisplayLimit);
  });

  it('should have an search input', () => {
    const input = fixture.nativeElement.querySelector(INPUT_SELECTOR);
    expect(input).toBeTruthy();
  });
});
