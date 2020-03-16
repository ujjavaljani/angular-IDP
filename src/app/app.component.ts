import { Component, OnInit } from '@angular/core';
import { LoaderService } from './utills/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-idp';
  isLoading: boolean;
  constructor(private loaderService: LoaderService) {}

  ngOnInit() {
    this.loaderService.getLoadingStatus().subscribe((value) => {
      this.changeLoader(value);
    });
  }
  changeLoader(value) {
    this.isLoading = value;
    console.log("loading value",this.isLoading);
  }
  // get isLoading(): boolean {
  //   // console.log("loading changed in dashboard",this.loaderService.isLoading);
  //   return this.loaderService.isLoading;
  // }
}
