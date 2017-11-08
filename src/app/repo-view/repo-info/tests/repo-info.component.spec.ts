import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { RepoInfoComponent } from '../repo-info.component';
import {
  ELEMENT_HREF, ELEMENT_ICON, ELEMENT_LABEL, ELEMENT_TARGET, ELEMENT_TITLE, ICON_SELECTOR,
  LABEL_SELECTOR, LINK_SELECTOR
} from './repo-info.test-options';

describe('RepoInfoComponent: Basic Render', () => {
  let component: RepoInfoComponent;
  let fixture: ComponentFixture<RepoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule
      ],
      declarations: [ RepoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoInfoComponent);
    component = fixture.componentInstance;
    component.icon = ELEMENT_ICON;
    component.label = ELEMENT_LABEL;
    component.title = ELEMENT_TITLE;
    component.href = ELEMENT_HREF;
    component.target = ELEMENT_TARGET;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render icon', () => {
    const comp = fixture.nativeElement.querySelector(ICON_SELECTOR);
    expect(comp.className).toContain(ELEMENT_ICON);
  });
  it('should render label', () => {
    const comp = fixture.nativeElement.querySelector(LABEL_SELECTOR);
    expect(comp.innerHTML).toContain(ELEMENT_LABEL);
  });
  it('should render title', () => {
    const comp = fixture.nativeElement.querySelector(LABEL_SELECTOR);
    expect(comp.title).toBe(ELEMENT_TITLE);
  });
  it('should render link', () => {
    const comp = fixture.nativeElement.querySelector(LINK_SELECTOR);
    expect(comp.href).toContain(ELEMENT_HREF);
  });
  it('should render target', () => {
    const comp = fixture.nativeElement.querySelector(LINK_SELECTOR);
    expect(comp.target).toContain(ELEMENT_TARGET);
  });
});
