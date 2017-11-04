import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserViewComponent } from './user-view/user-view.component';

export const routes: Routes = [
  {
    path: 'user/:username',
    component: UserViewComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserViewRoutingModule {}
