import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';;

import { SignUpComponent } from './sign-up.component';

const modules = [
  SignUpComponent,
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
  export class SignUpModule {}
  