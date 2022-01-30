import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';

import { LoginModule } from './login';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { MatCardModule } from '@angular/material/card';

const modules:any[] = [
  TopStoriesComponent,
  
  ];
  
  @NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule,
      LoginModule,
      MatTableModule,
      MatCardModule
    ],
    entryComponents: [],
    providers: [],
    declarations: modules,
    exports: modules
  })
  export class ContainersModule {}
  