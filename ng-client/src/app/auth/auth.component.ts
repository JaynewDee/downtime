import { Component, OnInit } from '@angular/core';
import { IdbService } from '../idb/idb.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public connection: any;
  public mode: 'login' | 'signup' = 'login';
  constructor(private navService: NavService, private idb: IdbService) {}

  async ngOnInit() {
    console.log('auth init');
    const connectionState = await this.navService.getAuth();
    this.connection = connectionState;
    console.log(this.connection);
    const userStore = await this.idb.getUser();
    if (userStore === undefined) {
      console.log(`NOT AUTHORIZED`);
      return;
    }
    console.log(`AUTHORIZED`);
    return;
  }
}
