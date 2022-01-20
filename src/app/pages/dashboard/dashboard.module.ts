import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './components/history/history.component';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [DashboardComponent, HistoryComponent],
  imports: [CommonModule, MatCardModule, DashboardRoutingModule],
})
export class DashboardModule {}
