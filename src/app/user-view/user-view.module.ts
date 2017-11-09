import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { UserViewService } from './user-view-service/user-view.service';
import { UserViewComponent } from './user-view.component';
import { UserViewRoutingModule } from './user-view-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserReposComponent } from './user-repos/user-repos.component';
import { UserRepoItemComponent } from './user-repo-item/user-repo-item.component';
import { UserRepoFiltersComponent } from './user-repo-filters/user-repo-filters.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileInfoComponent } from './user-profile/profile-info/profile-info.component';


@NgModule({
  imports: [
    Angular2FontawesomeModule,
    CommonModule,
    FormsModule,
    SharedModule,
    UserViewRoutingModule,
  ],
  declarations: [
    UserViewComponent,
    UserProfileComponent,
    UserReposComponent,
    UserRepoItemComponent,
    UserRepoFiltersComponent,
    ProfileInfoComponent
  ],
  providers: [
    UserViewService,
  ]
})
export class UserViewModule { }
