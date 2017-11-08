import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { UserRepoFiltersComponent } from '../user-repo-filters.component';
import { RadioGroupComponent } from '../../../shared/components/radio-group/radio-group.component';
import { RadioItemComponent } from '../../../shared/components/radio-group/radio-item/radio-item.component';

import {
  RADIO_GROUP_SELECTOR, FILTERS, RADIO_GROUP_COUNT
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
        RadioGroupComponent,
        RadioItemComponent,
        UserRepoFiltersComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRepoFiltersComponent);
    component = fixture.componentInstance;
    component.filters = FILTERS;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should create 2 radio groups', () => {
    const radioGroups = fixture.nativeElement.querySelectorAll(RADIO_GROUP_SELECTOR);
    expect(radioGroups.length).toBe(RADIO_GROUP_COUNT);
  });

});
