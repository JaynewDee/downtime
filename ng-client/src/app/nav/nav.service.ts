import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  constructor(private http: HttpClient, private handler: HttpHandler) {}
  private serverUrl = `http://localhost:3001`;
  private httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
    }),
  };
  async getHome() {
    return this.http.get(this.serverUrl, this.httpOptions).subscribe();
  }

  async getAuth() {
    return this.http.get(this.serverUrl + '/users', this.httpOptions);
  }

  async getMonitor() {}

  async getReport() {}
}
