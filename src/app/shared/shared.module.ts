import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './components/loading/loading.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { RadioItemComponent } from './components/radio-group/radio-item/radio-item.component';
import { RequestService } from './services/request/request.service';
import { HeaderComponent } from './components/header/header.component';
import { InfoIconComponent } from './components/info-icon/info-icon.component';


@NgModule({
  imports: [
    Angular2FontawesomeModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    InfoIconComponent,
    LoadingComponent,
    RadioGroupComponent,
    RadioItemComponent
  ],
  exports: [
    HeaderComponent,
    InfoIconComponent,
    LoadingComponent,
    RadioGroupComponent,
    RadioItemComponent,
  ],
  providers: [
    RequestService
  ]
})
export class SharedModule { }
