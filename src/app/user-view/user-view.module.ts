import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewService } from './user-view-service/user-view.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    UserViewService,
  ]
})
export class UserViewModule { }
