import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupComponent } from '../radio-group.component';
import { RadioItemComponent } from '../radio-item/radio-item.component';


describe('RadioGroupComponent', () => {
  let component: RadioGroupComponent;
  let fixture: ComponentFixture<RadioGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RadioGroupComponent,
        RadioItemComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
