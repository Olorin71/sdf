import {Component} from '@angular/core';
import {SponsorsService} from './sponsors.service';
import {Observable} from 'rxjs/internal/Observable';
import {Sponsor} from './models/sponsor';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent {

  sponsors$: Observable<Array<Sponsor>>;

  constructor(private sponsorsService: SponsorsService) {
    this.sponsors$ = this.sponsorsService.getSponsors();
  }
}
