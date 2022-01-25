import { STORAGE_TOKEN } from './../app.module';
import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalstorageService {
  constructor(@Inject(STORAGE_TOKEN) private storage: Storage) {}

  setItem(key: string, value: object | string): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getObject(key: string): object {
    const item = this.storage.getItem(key);
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
    return this.storage.getItem(key) ?? '';
  }
}
