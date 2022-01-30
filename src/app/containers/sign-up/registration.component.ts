import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AppApiUrls } from "src/app/constants/api-url";
import { ApiService } from "src/app/service/api.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  user!: FormGroup;
  error: string='';

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {

    this.user = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  submit({value, valid}: {value: any, valid: boolean}){
    if(valid){
      let res = null;
      this.apiService.post(AppApiUrls.fakeApi.registration,{
        email: value.email, 
        password:value.password
      }).subscribe({
        next: (response : any) => {
          res = response.access_token; 
      
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.error=err;
          console.error(`Error ${err.error.error}`)
        }
      });
    }
  }

}