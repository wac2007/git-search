import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { MarkdownModule } from 'angular2-markdown';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute, Params } from '@angular/router';

import { RepoViewComponent } from '../repo-view.component';
import { RepoViewService } from '../repo-view-service/repo-view.service';
import { RequestService } from '../../shared/services/request/request.service';
import { ReadmeContainerComponent } from '../readme-container/readme-container.component';
import { InfoIconComponent } from '../../shared/components/info-icon/info-icon.component';
import {
  REPO_MOCK, ROUTE_PARAMS, TITLE_SELECTOR, INFO_STARS_SELECTOR, INFO_LANGUAGE_SELECTOR,
  INFO_LINK_SELECTOR, INFO_DESCRIPTION_SELECTOR, README_SELECTOR
} from './repo-view.test-options';


describe('RepoViewComponent', () => {
  let component: RepoViewComponent;
  let fixture: ComponentFixture<RepoViewComponent>;
  let repoViewService: RepoViewService;
  let paramProvider: Subject<Params>;
  let routeService: ActivatedRoute;

  beforeEach(async(() => {
    paramProvider = new Subject<Params>();
    TestBed.configureTestingModule({
      imports: [
        Angular2FontawesomeModule,
        HttpModule,
        MarkdownModule,
        RouterTestingModule,
      ],
      declarations: [
        InfoIconComponent,
        ReadmeContainerComponent,
        RepoViewComponent,
      ],
      providers: [
        RepoViewService,
        RequestService,
        { provide: ActivatedRoute, useValue: { params: paramProvider }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoViewComponent);
    component = fixture.componentInstance;
    paramProvider.next(ROUTE_PARAMS);
    repoViewService = fixture.debugElement.injector.get(RepoViewService);
    routeService = fixture.debugElement.injector.get(ActivatedRoute);
    spyOn(repoViewService, 'getRepoData').and.returnValue(REPO_MOCK);
    spyOn(repoViewService, 'getRepoReadme').and.returnValue('### REPO WORKS');
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('RepoViewComponent: Basic Render', () => {
    it('should have title', () => {
      routeService.params.subscribe((routes) => {
        const htmlComponent = fixture.nativeElement.querySelector(TITLE_SELECTOR);
        expect(htmlComponent).toBeTruthy();
      });
    });
    it('should have info stars', () => {
      routeService.params.subscribe((routes) => {
        const htmlComponent = fixture.nativeElement.querySelector(INFO_STARS_SELECTOR);
        expect(htmlComponent).toBeTruthy();
      });
    });
    it('should have info language', () => {
      routeService.params.subscribe((routes) => {
        const htmlComponent = fixture.nativeElement.querySelector(INFO_LANGUAGE_SELECTOR);
        expect(htmlComponent).toBeTruthy();
      });
    });
    it('should have external link', () => {
      routeService.params.subscribe((routes) => {
        const htmlComponent = fixture.nativeElement.querySelector(INFO_LINK_SELECTOR);
        expect(htmlComponent).toBeTruthy();
      });
    });
    it('should have description', () => {
      routeService.params.subscribe((routes) => {
        const htmlComponent = fixture.nativeElement.querySelector(INFO_DESCRIPTION_SELECTOR);
        expect(htmlComponent).toBeTruthy();
      });
    });
    it('should have readme', () => {
      routeService.params.subscribe((routes) => {
        const htmlComponent = fixture.nativeElement.querySelector(README_SELECTOR);
        expect(htmlComponent).toBeTruthy();
      });
    });
  });

  describe('RepoViewComponent: Behavior', () => {
    it('should match the expected route params', () => {
      routeService.params.subscribe((routes) => {
        expect(routes.repoOwner).toBe(ROUTE_PARAMS.repoOwner);
        expect(routes.repoName).toBe(ROUTE_PARAMS.repoName);
      });
    });
  });

});
