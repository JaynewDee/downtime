import { Injectable } from '@angular/core';
import { openDB, deleteDB, DBSchema } from 'idb';

@Injectable({
  providedIn: 'root',
})
export class IdbService {
  db?: IDBDatabase;
  constructor() {}

  open(idbName: string) {
    const dbPromise = openDB('user', 1, {
      upgrade(db) {
        db.createObjectStore('user', {
          keyPath: 'id',
          autoIncrement: true,
        });
      },
    });
    return dbPromise;
  }

  async getUser() {
    return (await this.open('user')).get('user', 1);
  }

  async setUser(user: any) {
    return (await this.open('user')).put('user', user);
  }
}
