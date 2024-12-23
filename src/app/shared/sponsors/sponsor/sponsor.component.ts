import {Component, Input} from '@angular/core';
import {Sponsor} from '../models/sponsor';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.component.html',
  styleUrls: ['./sponsor.component.scss']
})
export class SponsorComponent {
  @Input()
  sponsor: Sponsor;
}
