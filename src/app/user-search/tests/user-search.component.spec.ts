import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

import { TABLE_SELECTOR, RESULT_SELECTOR, INPUT_SELECTOR, USERS_MOCK } from './user-search.test-options';
import { UserSearchComponent } from '../user-search.component';
import { UserSearchService } from '../user-search-service/user-search.service';
import { SharedModule } from '../../shared/shared.module';
import { SearchTableComponent } from '../search-table/search-table.component';


describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;
  let searchService: UserSearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        RouterTestingModule,
        SharedModule,
      ],
      declarations: [
        SearchTableComponent,
        UserSearchComponent,
      ],
      providers: [
        UserSearchService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchComponent);
    component = fixture.componentInstance;
    searchService = fixture.debugElement.injector.get(UserSearchService);
    spyOn(searchService, 'searchUsers').and.returnValue(USERS_MOCK);
    spyOn(searchService, 'search').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('UserSearchComponent: Basic Info', () => {
    it('should have an search input', () => {
      const input = fixture.nativeElement.querySelector(INPUT_SELECTOR);
      expect(input).toBeTruthy();
    });

  });

  describe('UserSearchComponent: Behaviour', () => {
    it('should hide results when are nothing to display', () => {
      const table = fixture.nativeElement.querySelector(TABLE_SELECTOR);
      expect(table).toBeFalsy();
    });

    it('should render table results on input changes', () => {
      component.searchTerm.next('wac');
      fixture.detectChanges();
      searchService.search(component.searchTerm).subscribe(() => {
        expect(searchService.search).toHaveBeenCalled();
        expect(searchService.searchUsers).toHaveBeenCalled();
        fixture.detectChanges();
        const htmlResults = fixture.nativeElement.querySelectorAll(RESULT_SELECTOR);
        const arrayResult = Array.from(htmlResults);
        expect(arrayResult.length).toBe(component.resultDisplayLimit);
      });
    });
  });
});
