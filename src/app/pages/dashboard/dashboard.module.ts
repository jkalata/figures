import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatRadioModule } from '@angular/material/radio';
import { SelectionModule } from './components/selection/selection.module';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SelectionModule, DashboardRoutingModule],
})
export class DashboardModule {}
