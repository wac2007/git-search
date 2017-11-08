import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioItemComponent } from '../radio-item.component';
import { RADIO_CHECKED, RADIO_ITEM, RADIO_UNCHECKED, INPUT_SELECTOR } from './radio-item.test-options';


describe('RadioItemComponent', () => {
  let component: RadioItemComponent;
  let fixture: ComponentFixture<RadioItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioItemComponent);
    component = fixture.componentInstance;
    component.radioItem = RADIO_ITEM;
  });

  it('should create', () => {
    component.checked = RADIO_CHECKED;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('RadioItemComponent: Basic Render', () => {
    it('should be marked as checked', () => {
      component.checked = RADIO_CHECKED;
      fixture.detectChanges();
      const inputElement = fixture.nativeElement.querySelector(INPUT_SELECTOR);
      expect(inputElement.checked).toBeTruthy();
    });

    it('should be marked as unchecked', () => {
      component.checked = RADIO_UNCHECKED;
      fixture.detectChanges();
      const inputElement = fixture.nativeElement.querySelector(INPUT_SELECTOR);
      expect(inputElement.checked).toBeFalsy();
    });
  });
});
