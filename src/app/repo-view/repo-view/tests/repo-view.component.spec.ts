import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { MarkdownModule } from 'angular2-markdown';

import { RepoViewComponent } from '../repo-view.component';
import { RepoViewService } from '../../repo-view-service/repo-view.service';
import { COMPONENTS_SELECTORS } from './repo-view.test-options';
import { repoMock } from '../../repo-view-service/repoMock';


describe('RepoViewComponent', () => {
  let component: RepoViewComponent;
  let fixture: ComponentFixture<RepoViewComponent>;
  let repoViewService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule,
        HttpModule,
        MarkdownModule,
        RouterTestingModule,
      ],
      declarations: [
        RepoViewComponent
      ],
      providers: [
        RepoViewService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoViewComponent);
    component = fixture.componentInstance;
    repoViewService = fixture.debugElement.injector.get(RepoViewService);
    spyOn(repoViewService, 'getRepoData').and.returnValue(repoMock);
    spyOn(repoViewService, 'getRepoReadme').and.returnValue('### REPO WORKS');
    fixture.detectChanges();
  });

  it('should have basic info', () => {
    fixture.whenStable().then(() => {
      COMPONENTS_SELECTORS.forEach((selector) => {
        const htmlComponent = fixture.nativeElement.querySelector(selector);
        expect(htmlComponent).toBeTruthy();
      });
    });
  });
});
