import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageSelectComponent } from './components/language-select/language-select.component';

@NgModule({
  declarations: [ToolbarComponent, LanguageSelectComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    TranslocoModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}
