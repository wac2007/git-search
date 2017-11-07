import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserSearchModule } from './user-search/user-search.module';
import { UserViewModule } from './user-view/user-view.module';
import { RepoViewModule } from './repo-view/repo-view.module';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    RepoViewModule,
    UserSearchModule,
    UserViewModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
