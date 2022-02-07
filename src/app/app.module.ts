import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContainersModule } from './containers';
import { ApiService } from './service/api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoryDetailsComponent } from './containers/story-details/story-details.component';
import { AuthGuardService } from './service/auth.guard.guard';
import { AuthService } from './service/auth.service';
import { AuthInterceptor } from './service/auth.intercepter';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, StoryDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ContainersModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ApiService,
    AuthGuardService,
    AuthService
    /**
     * if you want to add bearer tokken in request header, you need to run chrome in this mode
     * chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
     {
       provide: HTTP_INTERCEPTORS,
       useClass: AuthInterceptor,
       multi: true
     }
     */
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
