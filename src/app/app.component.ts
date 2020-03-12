import { Component } from '@angular/core';
import { LoaderService } from './utills/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-idp';
  // isLoading: boolean;
  constructor(private loaderService: LoaderService) {
  }
  get isLoading(): boolean {
    return this.loaderService.isLoading;
}
}
