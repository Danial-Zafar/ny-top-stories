import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LoginModule } from './login';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { ComponentModule } from '../components';
import { SignUpModule } from './sign-up';

const modules:any[] = [
  TopStoriesComponent,
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      ComponentModule,
      LoginModule,
      SignUpModule
    ],
    entryComponents: [],
    providers: [],
    declarations: modules,
    exports: modules
  })
  export class ContainersModule {}
  