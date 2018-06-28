import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Page} from './models/page';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class PagesService {
	private pages: Array<Page>;

	constructor(private http: HttpClient) {
	}

	getPageMarkDown(page: Page): Observable<string> {
		return this.http.get(`/pages/${page.file}`, {responseType: 'text'})
			.pipe(catchError((err) => {
					console.log(err);
					return of(null);
				}));
	}

	getPages(): Observable<Array<Page>> {
		if (this.pages) {
			return of(this.pages);
		}

		return this.http.get<Array<Page>>('/pages/pages.json')
			.pipe(tap(pages => this.pages = pages));
	}

	getPage(name: string): Observable<Page | null> {
		return this.getPages()
			.pipe(map(pages => pages.find(page => page.name === name)));
	}
}
