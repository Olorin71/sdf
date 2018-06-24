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
	pages = Pages.filter(page => !page.isDefault).map(page => page.name);
	homepage = Pages.filter(page => page.isDefault).map(page => page.name)[0]
	title = 'SoCraTes Day Franken';
	subtitle = '29.09.2018';

	constructor() {
		console.log(JSON.stringify(Pages));
	    console.log(JSON.stringify(this.pages));
	    console.log(JSON.stringify(this.homepage));
	}
}
