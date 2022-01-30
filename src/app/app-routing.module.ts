import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';
import { SignUpComponent } from './containers/sign-up/sign-up.component';
import { StoryDetailsComponent } from './containers/story-details/story-details.component';
import { TopStoriesComponent } from './containers/top-stories/top-stories.component';
import { AuthGuardService } from './service/auth.guard.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'topstories',
    canActivate : [AuthGuardService],
    component: TopStoriesComponent
  },
  {
     path: 'story-details/:id',
     canActivate : [AuthGuardService],
     component: StoryDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
