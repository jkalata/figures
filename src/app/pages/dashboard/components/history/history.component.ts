import { ICalculatorHistory } from './interfaces/history.interfaces';
import { HistoryService } from './../../../../services/history.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent {
  history: ICalculatorHistory[] = [];

  constructor(private historyService: HistoryService) {
    this.history = this.historyService.getHistory();
  }
}
