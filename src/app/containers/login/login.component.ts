import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { AppApiUrls } from 'src/app/constants/api-url';
import { LoginModel } from 'src/app/models/login.model';
import { ApiService } from 'src/app/service/api.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user!: FormGroup;
  error: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authService: AuthService
  ) {
    if (this.authService.getToken()) {
      this.router.navigate(['/topstories']);
    }
  }

  ngOnInit(): void {
    this.user = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }

  submit({ value, valid }: { value: LoginModel; valid: boolean }) {
    if (valid) {
      let res = null;
      this.apiService
        .post(AppApiUrls.fakeApi.login, {
          email: value.email,
          password: value.password
        })
        .subscribe({
          next: (response: any) => {
            res = response.access_token;

            this.authService.setToken(res);
            this.authService.startRefreshTokenTimer();
            this.router.navigate(['/topstories']);
          },
          error: () => {
            this.error = 'username or password is not correct';
          }
        });
    }
  }

  signUp() {
    this.router.navigate(['/sign-up']);
  }
}
