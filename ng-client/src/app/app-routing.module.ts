import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/forms/login/login.component';
import { SignupComponent } from './auth/forms/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    title: 'monitor',
    path: 'users/:email/monitor',
    component: MonitorComponent,
  },
  {
    title: 'report',
    path: 'users/:email/report',
    component: ReportComponent,
  },
  { title: 'auth', path: 'users/auth', component: AuthComponent },
  { title: 'home', path: '', component: HomeComponent },
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
