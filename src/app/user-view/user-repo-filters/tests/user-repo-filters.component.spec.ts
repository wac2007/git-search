import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UserRepoFiltersComponent } from '../user-repo-filters.component';
import {
  SORT_INPUT_SELECTOR, ORDER_INPUT_SELECTOR, SORT_INPUT_COUNT, ORDER_INPUT_COUNT
} from './user-repo-filters.test-options';


describe('UserRepoFiltersComponent', () => {
  let component: UserRepoFiltersComponent;
  let fixture: ComponentFixture<UserRepoFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
      ],
      declarations: [
        UserRepoFiltersComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepoFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create 5 sort inputs', () => {
    const sortInputs = fixture.nativeElement.querySelectorAll(SORT_INPUT_SELECTOR);
    expect(sortInputs.length).toBe(SORT_INPUT_COUNT);
  });

  it('should create 2 order inputs', () => {
    const orderInputs = fixture.nativeElement.querySelectorAll(ORDER_INPUT_SELECTOR);
    expect(orderInputs.length).toBe(ORDER_INPUT_COUNT);
  });
});
