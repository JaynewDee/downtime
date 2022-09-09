import { Component, OnInit } from '@angular/core';
import { IdbService } from '../idb/idb.service';
import { NavService } from '../nav/nav.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public connection: any;
  public loggedIn: boolean = false;
  public authMode: 'login' | 'signup';
  constructor(
    private navService: NavService,
    private idb: IdbService,
    private authService: AuthService
  ) {
    this.authMode = 'login';
  }

  async ngOnInit() {
    const connectionState = await this.navService.getAuth();
    this.connection = connectionState;
    const userStore = await this.idb.getUser();
    const loggedIn = await this.authService.getLoginStatus();
    this.loggedIn = loggedIn;

    if (userStore === undefined) {
      console.log(`NOT AUTHORIZED`);
      return;
    }
    console.log(`AUTHORIZED`);
    return;
  }

  setAuthMode(mode: typeof this.authMode) {
    this.authMode = mode;
  }
}
