import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { MarkdownModule } from 'angular2-markdown';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { RepoViewComponent } from './repo-view.component';
import { RepoViewService } from './repo-view-service/repo-view.service';
import { RepoViewRoutingModule } from './repo-view-routing.module';
import { ReadmeContainerComponent } from './readme-container/readme-container.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    Angular2FontawesomeModule,
    CommonModule,
    HttpModule,
    MarkdownModule.forRoot(),
    RepoViewRoutingModule,
    SharedModule,
  ],
  declarations: [
    RepoViewComponent,
    ReadmeContainerComponent
  ],
  providers: [
    RepoViewService,
  ]
})
export class RepoViewModule { }
