import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { ProfileInfoComponent } from '../profile-info.component';

describe('ProfileInfoComponent', () => {
  let component: ProfileInfoComponent;
  let fixture: ComponentFixture<ProfileInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule,
      ],
      declarations: [
        ProfileInfoComponent
      ]
    })
    .compileComponents();
  }));

  const ICON_SELECTOR = '.fa';
  const LABEL_SELECTOR = '.profile-label';
  const TITLE_SELECTOR = '.profile-info';
  const LINK_SELECTOR = '.profile-url';
  const CREATE_ICON = 'eye';
  const CREATE_TITLE = 'Eye';
  const CREATE_LABEL = 'A big eye';
  const CREATE_URL = 'mailto:test@test.com';
  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoComponent);
    component = fixture.componentInstance;
    component.icon = CREATE_ICON;
    component.label = CREATE_LABEL;
    component.title = CREATE_TITLE;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ProfileInfoComponent: Basic Render', () => {
    it('should render icon', () => {
      const htmlElement = fixture.nativeElement.querySelector(ICON_SELECTOR);
      expect(htmlElement.className).toContain(CREATE_ICON);
    });
    it('should render label', () => {
      const htmlElement = fixture.nativeElement.querySelector(LABEL_SELECTOR);
      expect(htmlElement.innerText).toBe(CREATE_LABEL);
    });
    it('should render title', () => {
      const htmlElement = fixture.nativeElement.querySelector(TITLE_SELECTOR);
      expect(htmlElement.title).toBe(CREATE_TITLE);
    });
    it('should render link url', () => {
      component.url = CREATE_URL;
      fixture.detectChanges();
      const htmlElement = fixture.nativeElement.querySelector(LINK_SELECTOR);
      expect(htmlElement.innerText).toBe(CREATE_LABEL);
      expect(htmlElement.href).toBe(CREATE_URL);
    });
  });
});
