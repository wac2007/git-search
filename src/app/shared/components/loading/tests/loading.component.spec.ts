import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from '../loading.component';
import {
  DEFAULT_TITLE, DEFAULT_ICON, CUSTOM_MESSAGE, SPAN_SELECTOR, ICON_SELECTOR, CUSTOM_ICON,
} from './loading.test-options';


describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule,
      ],
      declarations: [
        LoadingComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('LoadingComponent: Basic Info', () => {
    it('should render default title', () => {
      const loadingElement = fixture.nativeElement.querySelector(SPAN_SELECTOR);
      expect(loadingElement.innerHTML).toContain(DEFAULT_TITLE);
    });
    it('should render custom title', () => {
      component.loadingMessage = CUSTOM_MESSAGE;
      fixture.detectChanges();
      const loadingElement = fixture.nativeElement.querySelector(SPAN_SELECTOR);
      expect(loadingElement.innerHTML).toContain(CUSTOM_MESSAGE);
    });
    it('should render default icon', () => {
      const iconElement = fixture.nativeElement.querySelector(ICON_SELECTOR);
      expect(iconElement.className).toContain(DEFAULT_ICON);
    });
    it('should render custom icon', () => {
      component.iconLoading = CUSTOM_ICON;
      fixture.detectChanges();
      const iconElement = fixture.nativeElement.querySelector(ICON_SELECTOR);
      expect(iconElement.className).toContain(CUSTOM_ICON);
    });
  });

});
