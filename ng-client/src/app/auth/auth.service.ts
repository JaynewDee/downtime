import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IdbService } from '../idb/idb.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser: any;
  userDomains: any;
  private baseURL: string = `http://localhost:3001/users`;
  constructor(private http: HttpClient, private idb: IdbService) {}

  async login({ email, password }: any) {
    return this.http
      .post(this.baseURL + '/login', {
        email: email,
        password: password,
      })
      .subscribe((res: any) => {
        this.userDomains = res.user.user.domains;
        sessionStorage.setItem('token', res.user.token.access_token);
        this.idb.setUser(res.user.user);
        return res;
      });
  }
}
