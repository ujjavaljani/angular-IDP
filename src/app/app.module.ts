import { LoaderService } from './utills/loader.service';
import { AuthService } from './utills/auth.service';
import { APIService } from './utills/API.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './utills/auth-guard.service';
import { LoaderComponent } from './loader/loader.component';
import { HeaderComponent } from './header/header.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent, LoaderComponent, HeaderComponent, BookingComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, FormsModule, HttpClientModule],
  providers: [APIService, AuthService, AuthGuard, LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
