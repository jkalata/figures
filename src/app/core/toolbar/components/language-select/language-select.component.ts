import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent {
  availableLanguages: string[] = [];

  currentLanguage!: string;

  constructor(private transloco: TranslocoService) {
    this.getAvailableLanguages();
    this.getCurrentLanguage();
  }

  private getAvailableLanguages(): void {
    this.availableLanguages = this.transloco
      .getAvailableLangs()
      .map((lang) => lang.toString());
  }

  private getCurrentLanguage(): void {
    this.currentLanguage = this.transloco.getActiveLang();
  }

  changeLang(event: MatSelectChange): void {
    console.log(event);
    this.transloco.setActiveLang(event.value);
    this.getCurrentLanguage();
  }
}
