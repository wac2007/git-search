import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './components/loading/loading.component';
import { RadioGroupComponent } from './components/radio-group/radio-group.component';
import { RadioItemComponent } from './components/radio-group/radio-item/radio-item.component';


@NgModule({
  imports: [
    Angular2FontawesomeModule,
    CommonModule
  ],
  declarations: [
    LoadingComponent,
    RadioGroupComponent,
    RadioItemComponent
  ],
  exports: [
    LoadingComponent,
    RadioGroupComponent,
    RadioItemComponent,
  ]
})
export class SharedModule { }
