import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentYear = new Date().getFullYear();

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(
      browserLang && browserLang.match(/en|de/) ? browserLang : 'en'
    );
  }

  switchLang(lang: 'en' | 'de') {
    this.translate.use(lang);
  }
}
