import { GET_BOOKINGS_API, HTTP_POST, CANCEL_BOOKING_API } from "./../constants/API";
import { Component, OnInit } from "@angular/core";
import { LoaderService } from "../utills/loader.service";
import { APIService } from "../utills/API.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  bookings: object[] = [];
  errorMessage: string;
  constructor(
    private APIService: APIService,
    private loaderService: LoaderService
  ) {}

  ngOnInit() {
    this.getBookings();
  }
  getBookings() {
    this.loaderService.showLoading();
    this.APIService.API(HTTP_POST, GET_BOOKINGS_API, {}, true).subscribe(
      (response: any) => {
        console.log("Response ==>", response);
        this.loaderService.hideLoading();
        if (response && response.data) {
          this.errorMessage = "";
          this.bookings = response.data;
          // this.authService.login(response.data);
          // this.router.navigate(['/dashboard']);
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
          this.errorMessage = "Something went wrong.";
        }
      }
    );
  }
  cancelBooking(booking) {
    let cancelBooking = confirm(
      "Are you sure, you want to cancel this booking?"
    );
    if (cancelBooking) {
      this.loaderService.showLoading();
      this.APIService.API(HTTP_POST, CANCEL_BOOKING_API, {bookingId: booking._id}, true).subscribe(
        (response: any) => {
          console.log("Response ==>", response);
          this.loaderService.hideLoading();
          if (response && response.data) {
            this.getBookings();
            this.errorMessage = "";
            // this.bookings = response.data;
            // this.authService.login(response.data);
            // this.router.navigate(['/dashboard']);
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
            this.errorMessage = "Something went wrong.";
          }
        }
      );
    }
  }
}
