import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
  imports: [
    Angular2FontawesomeModule,
    CommonModule
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent,
  ]
})
export class SharedModule { }
