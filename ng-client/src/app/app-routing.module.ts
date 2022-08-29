import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { title: 'home', path: '', component: HomeComponent },
  { title: 'auth', path: 'users', component: AuthComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
