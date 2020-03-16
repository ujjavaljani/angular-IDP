import { LoaderService } from './../utills/loader.service';
import { AuthService } from './../utills/auth.service';
import { APIService } from './../utills/API.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { HTTP_POST, LOGIN_API } from '../constants/API';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('login', { static: false }) loginData: NgForm;
  errorMessage = '';
  constructor(
    private APIService: APIService,
    private router: Router,
    private authService: AuthService,
    private loaderService: LoaderService
  ) {}
  loginForm() {
    // console.log(this.loginData.value);
    this.loaderService.showLoading();
    this.APIService.API(
      HTTP_POST,
      LOGIN_API,
      this.loginData.value,
      false
    ).subscribe(
      (response: any) => {
        console.log('Response ==>', response);
        this.loaderService.hideLoading();
        if (response && response.data) {
          this.authService.login(response.data);
          this.errorMessage = '';
          this.router.navigate(['/my-bookings']);
        }
      },
      error => {
        this.loaderService.hideLoading();
        if (error.error.error) {
          this.errorMessage = error.error.error;
        } else if (error.statusText) {
          this.errorMessage = error.statusText;
        } else if (error.error) {
          this.errorMessage = error.error;
        } else {
          this.errorMessage = 'Something went wrong.';
        }
      }
    );
  }
}
