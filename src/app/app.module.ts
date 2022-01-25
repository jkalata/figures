import { ToolbarModule } from './core/toolbar/toolbar.module';
import { AppRoutingModule } from './app-routing.module';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

export const STORAGE_TOKEN = new InjectionToken<Storage>('storage-token');
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [{ provide: STORAGE_TOKEN, useValue: localStorage }],
  bootstrap: [AppComponent],
})
export class AppModule {}
