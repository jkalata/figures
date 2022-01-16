import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  setItem(key: string, value: object | string): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): object | string | null {
    const item = localStorage.getItem(key);
    if (item !== null) {
      return JSON.parse(item);
    } else return null;
  }
}
