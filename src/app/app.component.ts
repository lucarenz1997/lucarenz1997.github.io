import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentYear = new Date().getFullYear();

  // NEW: dynamic main layout class
  mainClass = 'app-main--about';

  constructor(public translate: TranslateService, private router: Router) {
    /* --- KEEPING YOUR ORIGINAL TRANSLATION LOGIC --- */
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(
      browserLang && browserLang.match(/en|de/) ? browserLang : 'en'
    );

    /* --- NEW: set layout class based on current route --- */
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((event) => {
        const url = event.urlAfterRedirects || event.url;

        if (url.startsWith('/photography')) {
          this.mainClass = 'app-main--photos';
        } else if (url.startsWith('/videography')) {
          this.mainClass = 'app-main--videos';
        } else if (url.startsWith('/projects') || url.startsWith('/tech')) {
          this.mainClass = 'app-main--projects';
        } else {
          this.mainClass = 'app-main--about'; // default
        }
      });
  }

  /* Your original method, unchanged */
  switchLang(lang: 'en' | 'de') {
    this.translate.use(lang);
  }
}
