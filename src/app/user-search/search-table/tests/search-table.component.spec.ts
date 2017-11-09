import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchTableComponent } from '../search-table.component';
import { MOCK_LIST, RESULT_LIMIT, ROW_SELECTOR } from './search-table.test-options';


describe('SearchTableComponent', () => {
  let component: SearchTableComponent;
  let fixture: ComponentFixture<SearchTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        SearchTableComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTableComponent);
    component = fixture.componentInstance;
    component.rowList = MOCK_LIST;
    component.resultDisplayLimit = RESULT_LIMIT;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render rows', () => {
    const htmlRows = fixture.nativeElement.querySelectorAll(ROW_SELECTOR);
    const rows = Array.from(htmlRows);
    expect(rows.length).toBe(RESULT_LIMIT);
  });
});
