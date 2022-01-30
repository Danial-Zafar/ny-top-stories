import { Injectable } from '@angular/core';
import { AppApiUrls } from '../constants/api-url';
import { ApiService } from './api.service';

@Injectable()
export class AuthService {
  token: string | null = null;
  refreshTokenTimeout: any;
 
  constructor(private apiService: ApiService) {}
  
  setToken( token: string ){
    if(token){
      localStorage.setItem('token', token);
      this.token = token;
    }
  }

  getToken(){
    return this.token || localStorage.getItem('token');
  }

  startRefreshTokenTimer() {
        if(this.token){
          const jwtToken = JSON.parse(atob((this.token as string)?.split('.')[1]));

          const expires = new Date(jwtToken.exp * 1000);
          const timeout = (expires.getTime() - Date.now()) - (60 * 1000);
        
          const email= jwtToken.email;
          const password= jwtToken.password;
          this.refreshTokenTimeout = setTimeout(() => this.refreshToken(email, password), timeout);
        }
    }

    refreshToken(email: string, password:string) {
      this.apiService.post(AppApiUrls.fakeApi.login,{
        email: email, 
        password: password
      }).subscribe({
        next: (response : any) => {
          this.setToken (response.access_token);
          this.startRefreshTokenTimer();
        },
        error: (err: string) => {
          console.log(err);
        }
      });
    }

    /**
     * this function is use to clear the token
     */
    logOut(){
      this.token=null;
      localStorage.clear();
    }
}