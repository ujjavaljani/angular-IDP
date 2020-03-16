import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LoaderService {
  // isLoading: boolean;
  // loaderVisibilityChange: Subject<boolean> = new Subject<boolean>();
  // constructor() {
  //   this.isLoading = false;
  //   this.loaderVisibilityChange.subscribe((value) => {
  //       // console.log("before changes loader",this.isLoading);
  //       this.isLoading = value;
  //       // console.log("after changes loader",this.isLoading);
  //   });
  // }
  private isLoading: BehaviorSubject<boolean>;
  constructor() {
    this.isLoading = new BehaviorSubject<boolean>(false);
  }
  getLoadingStatus(): Observable<boolean> {
    return this.isLoading.asObservable();
  }
  showLoading() {
    this.isLoading.next(true);
  }
  hideLoading() {
    this.isLoading.next(false);
  }
}
