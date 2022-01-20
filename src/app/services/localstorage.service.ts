import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  setItem(key: string, value: object | string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getObject(key: string): object {
    const item = localStorage.getItem(key);
    if (item !== null) {
      try {
        return JSON.parse(item);
      } catch (e) {
        console.error(e);
        return {};
      }
    } else {
      return {};
    }
  }

  getString(key: string): string {
    return localStorage.getItem(key) ?? '';
  }
}
