import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IdbService } from '../idb/idb.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn: boolean;
  currentUser: any;
  userDomains: string[];
  private baseURL: string = `http://localhost:3001/users`;
  constructor(private http: HttpClient, private idb: IdbService) {
    this.loggedIn = false;
    this.currentUser = undefined;
    this.userDomains = [];
  }

  async login({ email, password }: any) {
    return this.http
      .post(this.baseURL + '/login', {
        email: email,
        password: password,
      })
      .subscribe((res: any) => {
        this.currentUser = res.user.user;
        this.userDomains = res.user.user.domains;
        sessionStorage.setItem('token', res.user.token.access_token);
        this.idb.setUser(this.currentUser);
        return res;
      });
  }

  async authorize() {
    const session = await this.idb.getUser();
    if (session === undefined) {
      return false;
    }
    return true;
  }
}
