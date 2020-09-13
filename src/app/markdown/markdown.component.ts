import {Component, HostBinding, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {FADE_IN_ROUTE_TRANSITION} from '../app.animations';
import {Page} from '../pages/models/page';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {PagesService} from '../pages/pages.service';

@Component({
	templateUrl: './markdown.component.html',
	styleUrls: ['./markdown.component.scss'],
	animations: [...FADE_IN_ROUTE_TRANSITION]
})
export class MarkdownComponent implements OnInit {

	@HostBinding('@routeTransition')
	routeTransition = '';

	pages$: Observable<Array<Page>>;
	markdown$: Observable<string>;

	constructor(private router: Router, private route: ActivatedRoute, private pagesService: PagesService) {
		this.pages$ = this.pagesService.getPages();
	}

	ngOnInit(): void {
		this.markdown$ = this.route.params.pipe(
			map(params  => params['page']),
			switchMap(name => this.pagesService.getPage(name)),
			tap(page => this.checkIfExists(page)),
			filter(Boolean),
			switchMap((page: Page) => this.pagesService.getPageMarkDown(page)));
	}

	private checkIfExists(obj: any) {
		if (!obj) {
			this.pagesService.getPages().pipe(
				map(pages => pages.find(page => page.isDefault)))
				.subscribe(defaultPage => this.router.navigate([`/${defaultPage.name}`]));
			// this.router.navigate(['/404']);
		}
	}
}
