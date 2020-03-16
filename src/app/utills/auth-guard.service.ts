import { AuthService } from "./auth.service";

import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  isLoggedin: boolean;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.authService.isAuthenticated().subscribe(value => {
      this.isLoggedin = value;
    });
    if (this.isLoggedin){
      return true;
    } else {
      this.router.navigate(['/']);
    }
  }
}
