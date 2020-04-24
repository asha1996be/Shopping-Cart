import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}
  
  canActivate( ) {
    const loggedInUser = "asha@gmail.com";
    if (loggedInUser) {
      this.router.navigate(['/shopping-cart']);
      return false;
    }
  }
}
