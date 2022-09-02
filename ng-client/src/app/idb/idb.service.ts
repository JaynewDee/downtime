import { Injectable } from '@angular/core';
import * as nanoid from 'nanoid';
@Injectable({
  providedIn: 'root',
})
export class IdbService {
  db?: IDBDatabase;
  constructor() {}

  open(idbName: string) {
    const request_db = indexedDB.open(idbName, 1);
    console.log(request_db);
    this.catchEvent(request_db);
  }

  getUser() {
    const request = indexedDB.open('user');
    request.onupgradeneeded = () => {
      this.db = request.result;
      const store = this.db.transaction('user');
      const userStore = store.objectStore('user');
      console.log(userStore);
    };
    request.onsuccess = () => {
      this.db = request.result;
    };
  }

  setUser(user: any) {
    const request = indexedDB.open('user');
    this.catchEvent(request);
    request.onupgradeneeded = () => {
      this.db = request.result;
      const store = this.db.createObjectStore('user', {
        keyPath: 'id',
        autoIncrement: true,
      });
      store.createIndex('by_email', 'email', { unique: true });
      store.put(user);
    };
    request.onsuccess = () => {
      this.db = request.result;
    };
  }
  catchEvent(db: any) {
    db.onerror = () => {
      console.log(db.error);
    };
    db.onsuccess = () => {
      console.log(db.result);
    };
  }
}
