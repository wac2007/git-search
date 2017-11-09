import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { InfoIconComponent } from '../info-icon.component';
import { ICON_SELECTOR, LABEL_SELECTOR, TITLE_SELECTOR, LINK_SELECTOR,
  CREATE_ICON, CREATE_TITLE, CREATE_LABEL, CREATE_URL
} from './info-icon.test-options';

describe('InfoIconComponent', () => {
  let component: InfoIconComponent;
  let fixture: ComponentFixture<InfoIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule,
      ],
      declarations: [
        InfoIconComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoIconComponent);
    component = fixture.componentInstance;
    component.icon = CREATE_ICON;
    component.label = CREATE_LABEL;
    component.title = CREATE_TITLE;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('InfoIconComponent: Basic Render', () => {
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
