import { Injectable } from '@angular/core';
import {
 CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
 CanActivateChild, Router
} from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor( private router: Router ) {}

  public canActivate(): boolean {

    if(localStorage.getItem('token')){
      return true;
    } else{
      this.router.navigate(['/login']);

      return false;
    }
  }
}

