import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sponsor} from './models/sponsor';
import {of, Observable} from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SponsorsService {

	private sponsors: Array<Sponsor>;

	constructor(private http: HttpClient) {
	}

	getSponsors(): Observable<Array<Sponsor>> {
		const randomize = () => Math.floor(Math.random() * 3 - 1); // -1, 0 or 1

		return this._getSponsors()
			.pipe(map(sponsors => sponsors.sort(randomize)));
	}

	private _getSponsors(): Observable<Array<Sponsor>> {
		if (this.sponsors) {
			return of(this.sponsors);
		}

		return this.http.get<Array<Sponsor>>('/spons/spons.json')
			.pipe(tap(sponsors => this.sponsors = sponsors));
	}
}
