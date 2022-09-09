import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { IdbService } from './idb/idb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Downtime';
  loggedIn = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {}
}
