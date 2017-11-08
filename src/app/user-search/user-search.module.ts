import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { SharedModule } from '../shared/shared.module';

import { UserSearchComponent } from './user-search.component';
import { UserSearchRoutingModule } from './user-search-routing.module';
import { UserSearchService } from './user-search-service/user-search.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    UserSearchRoutingModule,
  ],
  declarations: [
    UserSearchComponent,
  ],
  providers: [
    UserSearchService
  ],
})
export class UserSearchModule { }
