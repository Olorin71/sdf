import {NgModule} from '@angular/core';
import {MarkdownComponent} from './markdown.component';
import { MarkdownModule  as MarkdownModuleDep } from 'ngx-md';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

declare const DefaultPath: string;
const markdownRoutes: Array<Route> = [
	{
		path: ':page',
		component: MarkdownComponent,
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: DefaultPath
	}
];

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forChild(markdownRoutes),
		MarkdownModuleDep.forRoot()
	],
	declarations: [
		MarkdownComponent
	]
})
export class MarkdownModule {
	constructor() {}
}
