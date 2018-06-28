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
	title = 'SoCraTes Day Franken - 29.09.2018';

	constructor(private pagesService: PagesService) {
		this.pages$ = this.pagesService.getPages()
			.pipe(map(pages => pages.map(page => page.name)));
	}
}
