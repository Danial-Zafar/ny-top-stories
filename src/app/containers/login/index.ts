import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';;

import { LoginComponent } from './login.component';

const modules = [
  LoginComponent,
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
    ],
    entryComponents: [],
    providers: [],
    declarations: modules,
    exports: modules
  })
  export class LoginModule {}
  