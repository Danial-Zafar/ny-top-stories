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
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user!: FormGroup;
  error: string = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private authSerive: AuthService
  ) {
    if (this.authSerive.getToken()) {
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
        .post(AppApiUrls.fakeApi.registration, {
          email: value.email,
          password: value.password
        })
        .subscribe({
          next: (response: any) => {
            this.router.navigate(['/login']);
          },
          error: (err) => {
            this.error = err;
            console.error(`Error ${err.error.error}`);
          }
        });
    }
  }
}
