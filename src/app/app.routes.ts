import {Route} from '@angular/router';

export const routes: Array<Route> = [
	{
		path: '',
		loadChildren: './markdown/markdown.module#MarkdownModule',
	}
];
