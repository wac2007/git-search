import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { RepoViewComponent } from './repo-view/repo-view.component';
import { RepoViewService } from './repo-view-service/repo-view.service';
import { RepoViewRoutingModule } from './repo-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RepoViewRoutingModule,
  ],
  declarations: [RepoViewComponent],
  providers: [
    RepoViewService,
  ]
})
export class RepoViewModule { }
