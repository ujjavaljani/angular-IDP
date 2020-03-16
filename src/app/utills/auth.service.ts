import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loginData = null;
  // isLoggedin = false;
  private isLoggedin: BehaviorSubject<boolean>;
  constructor() {
    this.isLoggedin = new BehaviorSubject<boolean>(false);
  }
  // loginChange: Subject<boolean> = new Subject<boolean>();
  // constructor() {
  //   this.loginChange.subscribe((value) => {
  //       // console.log("before changes loader",this.isLoading);
  //       this.isLoggedin = value;
  //       // console.log("after changes loader",this.isLoading);
  //   });
  // }
  isAuthenticated(): Observable<boolean> {
    // if (this.loginData) {
    //   this.loginChange.next(true);
    //   // return true;
    // } else {
    //   this.loginChange.next(false);
    //   // return false;
    // }
    return this.isLoggedin.asObservable();
  }
  login(authData) {
    this.loginData = authData;
    this.isLoggedin.next(true);
  }
}
