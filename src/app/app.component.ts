import {Component} from '@angular/core';
import {Page} from './models/page';

declare const Pages: Array<Page>;

declare const DefaultPath: string;


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	pages = Pages.map(page => page.name);
	title = 'SoCraTes Day Franken - 29.09.2018';

	constructor() {
		console.log(typeof DefaultPath);
	}
}
