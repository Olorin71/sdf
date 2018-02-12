import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/switchMap';
import {SLIDE_RIGHT_ROUTE_TRANSITION} from '../app.animations';
import {environment} from '../../environments/environment';
import {Page} from '../models/page';

declare const Pages: Array<Page>;

@Component({
	templateUrl: './markdown.component.html',
	styleUrls: ['./markdown.component.scss'],
	animations: [...SLIDE_RIGHT_ROUTE_TRANSITION],
	host: {'[@routeTransition]': ''}
})
export class MarkdownComponent implements OnInit {
	markdown$: Observable<string>;

	constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) {
	}

	ngOnInit(): void {
		this.markdown$ = this.route.params.map(params => params['page'])
			.map(name => Pages.find(page => page.name === name))
			.do(page => page || this.router.navigate(['/404']))
			.filter(Boolean)
			.switchMap(page => this.http.get(`${environment.pages}${page.file}`, {responseType: 'text'}));
	}
}
