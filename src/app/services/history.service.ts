import { HISTORY_STORAGE_KEY } from './../pages/dashboard/consts/history.consts';
import {
  ICalculatorHistory,
  ICalculatorHistoryStored,
} from './../pages/dashboard/components/history/interfaces/history.interfaces';
import { LocalstorageService } from './localstorage.service';

import { DateTime } from 'luxon';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  constructor(private localStorageService: LocalstorageService) {}

  get(): ICalculatorHistory[] {
    const history: ICalculatorHistoryStored[] = this.getStoredHistory();
    return history.length > 0 ? this.convertEpochDatesToObjects(history) : [];
  }

  private getStoredHistory(): ICalculatorHistoryStored[] {
    return this.localStorageService.getObject(
      HISTORY_STORAGE_KEY
    ) as ICalculatorHistoryStored[];
  }

  private convertEpochDatesToObjects(
    history: ICalculatorHistoryStored[]
  ): ICalculatorHistory[] {
    return history.map((entry) => ({
      ...entry,
      date: DateTime.fromMillis(entry.date).toFormat('HH:mm dd-LL-yyyy'),
    }));
  }

  add(entry: ICalculatorHistoryStored): void {
    let storedHistory: ICalculatorHistoryStored[] = this.getStoredHistory();
    storedHistory.length > 0
      ? this.addToExistingHistory(storedHistory, entry)
      : (storedHistory = [entry]);
    this.localStorageService.setItem(HISTORY_STORAGE_KEY, storedHistory);
  }

  private addToExistingHistory(
    storedHistory: ICalculatorHistoryStored[],
    entry: ICalculatorHistoryStored
  ): void {
    if (this.entryLimitReached(storedHistory)) {
      storedHistory.pop();
    }
    storedHistory.unshift(entry);
  }

  private entryLimitReached(array: ICalculatorHistoryStored[]): boolean {
    return array.length === 10;
  }
}
