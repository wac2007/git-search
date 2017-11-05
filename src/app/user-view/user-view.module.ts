import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { UserViewService } from './user-view-service/user-view.service';
import { UserViewComponent } from './user-view/user-view.component';
import { UserViewRoutingModule } from './user-view-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    Angular2FontawesomeModule,
    CommonModule,
    FormsModule,
    UserViewRoutingModule,
  ],
  declarations: [
    UserViewComponent,
    UserProfileComponent
  ],
  providers: [
    UserViewService,
  ]
})
export class UserViewModule { }
