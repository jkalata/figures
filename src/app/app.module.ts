import { FigureCalculationsModule } from './modules/figure-calculations/figure-calculations.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FigureCalculationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
