import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';



const modules:any[] = [
  ListComponent
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
    ],
    entryComponents: [],
    providers: [],
    declarations: modules,
    exports: modules
  })
  export class ComponentModule {}