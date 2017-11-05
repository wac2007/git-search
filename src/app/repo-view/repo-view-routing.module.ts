import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepoViewComponent } from './repo-view/repo-view.component';


export const routes: Routes = [
  {
    path: 'repo/:repoOwner/:repoName',
    component: RepoViewComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class RepoViewRoutingModule {}
