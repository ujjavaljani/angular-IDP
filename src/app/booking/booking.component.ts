import { Router } from '@angular/router';
import { APIService } from './../utills/API.service';
import { LoaderService } from './../utills/loader.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HTTP_POST, BOOK_FLIGHT_API } from '../constants/API';

interface ReqData {
  tripType: any;
  travelDate: string;
  returnDate: string;
  infantsCount: number;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})

export class BookingComponent implements OnInit {
  @ViewChild('bookingForm', { static: false }) bookingForm: NgForm;

  todayDate: number;
  errorMessage: string;
  reqData: ReqData;
  constructor(private loaderService: LoaderService, private APIService: APIService, private router: Router) { }

  ngOnInit() {
      // const date = new Date();
      // this.todayDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      this.todayDate = new Date().getTime();
  }
  bookFlight() {

    // const reqData = {};
    // const reqData: ReqData = {};
    // console.log("booking value", this.bookingForm.value);
    // Object.assign(this.reqData, this.bookingForm.value);
    this.reqData = this.bookingForm.value;
    if (this.reqData.tripType) {
      this.reqData.tripType = 'two-way';
    } else {
      this.reqData.tripType = 'one-way';
    }
    if (this.reqData.travelDate) {
      this.reqData.travelDate = new Date(this.reqData.travelDate).toISOString();
    }
    if (this.reqData.returnDate) {
      this.reqData.returnDate = new Date(this.reqData.returnDate).toISOString();
    }
    this.reqData.infantsCount = 0;
    // console.log(this.reqData);
    this.loaderService.showLoading();
    this.APIService.API(
      HTTP_POST,
      BOOK_FLIGHT_API,
      this.reqData,
      true
    ).subscribe(
      (response: any) => {
        console.log('Response ==>', response);
        this.loaderService.hideLoading();
        if (response && response.data) {
          console.log('response:::::::', response);
          // this.authService.login(response.data);
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
