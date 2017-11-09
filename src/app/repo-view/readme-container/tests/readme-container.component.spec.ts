import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkdownModule } from 'angular2-markdown';

import { ReadmeContainerComponent } from '../readme-container.component';
import { README_MOCK, MARKDOWN_SELECTOR } from './readme-container.test-options';


describe('ReadmeContainerComponent', () => {
  let component: ReadmeContainerComponent;
  let fixture: ComponentFixture<ReadmeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MarkdownModule
      ],
      declarations: [
        ReadmeContainerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadmeContainerComponent);
    component = fixture.componentInstance;
    component.readmeTemplate = README_MOCK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoult have markdown tag', () => {
    const htmlElement = fixture.nativeElement.querySelector(MARKDOWN_SELECTOR);
    expect(htmlElement).toBeTruthy();
  });
});
