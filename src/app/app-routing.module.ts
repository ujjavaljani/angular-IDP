import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './utills/auth-guard.service';
import { BookingComponent } from './booking/booking.component';

const routes: Routes = [
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'my-bookings', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'plan-journy', canActivate: [AuthGuard], component: BookingComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
