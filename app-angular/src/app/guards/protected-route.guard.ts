import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
// import { LoginService } from '../features/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectedRouteGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const isUserLoggedIn = this.loginService.isUserLoggedIn();
      console.log(isUserLoggedIn);

      if(!isUserLoggedIn){
        this.router.navigate(['login']);
      }
    return isUserLoggedIn;
  }

}
