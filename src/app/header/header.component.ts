import { Component, OnInit } from '@angular/core';
import { AuthService } from '../utills/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedin: any;
  // isLoading: boolean;
  constructor(private authService: AuthService) {
  }
  ngOnInit() {
    // this.isLoggedin = this.authService.isAuthenticated();
    this.authService.isAuthenticated().subscribe((value) => {
      // console.log("login value",value);
      this.isLoggedin = value;
    });
  }

}
