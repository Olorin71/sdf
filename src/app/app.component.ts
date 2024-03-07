import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {PagesService} from './pages/pages.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages$: Observable<Array<string>>;
  homepages$: Observable<Array<string>>;
  title = 'SoCraTes Day Franken';
  subtitle = '29.06.2024';

  constructor(private pagesService: PagesService) {
    this.pages$ = this.pagesService.getPages()
      .pipe(map(pages => pages.filter(page => !page.isDefault).map(page => page.name)));
    this.homepages$ = this.pagesService.getPages()
      .pipe(map(pages => pages.filter(page => page.isDefault).map(page => page.name)));
  }
}
