import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewService } from './user-view-service/user-view.service';
import { UserViewComponent } from './user-view/user-view.component';
import { UserViewRoutingModule } from './user-view-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserViewRoutingModule,
  ],
  declarations: [UserViewComponent],
  providers: [
    UserViewService,
  ]
})
export class UserViewModule { }