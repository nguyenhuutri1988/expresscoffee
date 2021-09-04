import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private router: Router
) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = localStorage.getItem("role");
      if (currentUser != '') {
         

          // authorised so return true
          return true;
      }
else{
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/dangnhap'], { queryParams: { returnUrl: state.url } });
      return false;}
  }
  
}
