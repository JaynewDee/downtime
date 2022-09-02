import { Component, OnInit } from '@angular/core';
import { IdbService } from '../idb/idb.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  public users: any;
  public mode: 'login' | 'signup' = 'login';
  constructor(private navService: NavService, private idb: IdbService) {}

  async ngOnInit() {
    const request = await this.navService.getAuth();
    request.subscribe((res) => {
      this.users = res;
      console.log(res);
      console.log(this.users);
    });
    const userStore = this.idb.getUser();
    this.users = userStore;
  }

  printUser() {
    console.log(this.users);
  }
}
