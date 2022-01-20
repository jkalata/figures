import { DateTime } from 'luxon';
import { LocalstorageService } from './localstorage.service';
import {
  ICalculatorHistory,
  ICalculatorHistoryStored,
} from './../pages/dashboard/components/history/interfaces/history.interfaces';
import { Injectable, OnChanges } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  constructor(private localStorageService: LocalstorageService) {}

  getHistory(): ICalculatorHistory[] {
    let history: ICalculatorHistoryStored[] = this.getStoredHistory();
    if (history.length > 0) {
      return this.convertEpochDatesToObjects(history);
    } else {
      return [];
    }
  }

  getStoredHistory(): ICalculatorHistoryStored[] {
    return this.localStorageService.getObject(
      'history'
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

  addHistoryEntry(entry: ICalculatorHistoryStored): void {
    let storedHistory: ICalculatorHistoryStored[] = this.getStoredHistory();
    console.log(storedHistory);
    if (storedHistory.length > 0) {
      this.addToExistingHistory(storedHistory, entry);
    } else {
      storedHistory = [entry];
    }
    this.localStorageService.setItem('history', storedHistory);
  }

  private addToExistingHistory(
    storedHistory: ICalculatorHistoryStored[],
    entry: ICalculatorHistoryStored
  ) {
    if (this.entryLimitReached(storedHistory)) {
      storedHistory.pop();
    }
    storedHistory.reverse().push(entry);
    storedHistory.reverse();
  }

  private entryLimitReached(array: ICalculatorHistoryStored[]): boolean {
    return array.length === 10;
  }
}
