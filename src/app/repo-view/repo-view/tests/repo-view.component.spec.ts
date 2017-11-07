// import { async, ComponentFixture, TestBed, fakeAsync, inject, tick } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
// import { MockBackend } from '@angular/http/testing';
// import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
// import { MarkdownModule } from 'angular2-markdown';
// import { Subject } from 'rxjs/Subject';
// import { ActivatedRoute, Params } from '@angular/router';

// import { RepoViewComponent } from '../repo-view.component';
// import { RepoViewService } from '../../repo-view-service/repo-view.service';
// import {
//   getMock, PARAM_REPO, PARAM_USERNAME, NAME_SELECTOR, STARS_SELECTOR, LANGUAGE_SELECTOR,
//   EXTERNAL_LINK_SELECTOR, DESCRIPTION_SELECTOR,
// } from './repo-view.test-options';


// describe('RepoViewComponent', () => {
//   let component: RepoViewComponent;
//   let fixture: ComponentFixture<RepoViewComponent>;
//   let params: Subject<Params>;

//   beforeEach(async(() => {
//     params = new Subject<Params>();
//     TestBed.configureTestingModule({
//       imports: [
//         Angular2FontawesomeModule,
//         HttpModule,
//         MarkdownModule,
//         RouterTestingModule,
//       ],
//       declarations: [
//         RepoViewComponent
//       ],
//       providers: [
//         RepoViewService,
//         { provide: XHRBackend, useClass: MockBackend },
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(RepoViewComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should have basic info',
//     fakeAsync(inject([XHRBackend], (mockBackend) => {
//       mockBackend.connections.subscribe((connection) => {
//         connection.mockRespond(new Response(new ResponseOptions({
//           body: getMock(connection.request.url)
//         })));
//       });
//       params.next({
//         repoOwner: PARAM_USERNAME,
//         repoName: PARAM_REPO,
//       });
//       tick();
//       fixture.detectChanges();

//       const componentList = [
//         NAME_SELECTOR,
//         // STARS_SELECTOR,
//         // LANGUAGE_SELECTOR,
//         // EXTERNAL_LINK_SELECTOR,
//         // DESCRIPTION_SELECTOR
//       ];
//       componentList.forEach((componentSelector) => {
//         const componentHtml = fixture.nativeElement.querySelector(componentSelector);
//         expect(componentHtml).toBeTruthy();
//       });
//     })
//   ));
// });
