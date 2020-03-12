import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {
  isLoading: boolean;
  loaderVisibilityChange: Subject<boolean> = new Subject<boolean>();
  constructor() {
    this.isLoading = false;
    this.loaderVisibilityChange.subscribe((value) => {
      console.log("before changes loader",this.isLoading);
      this.isLoading = value;
      console.log("after changes loader",this.isLoading);
  });
  }
  showLoading() {
    this.loaderVisibilityChange.next(true);
  }
  hideLoading() {
    this.loaderVisibilityChange.next(false);
  }
}
