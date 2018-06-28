import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SponsorsComponent} from './sponsors.component';
import {SponsorComponent} from './sponsor/sponsor.component';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule
	],
	declarations: [
		SponsorsComponent,
		SponsorComponent
	],
	exports: [
		SponsorsComponent
	]
})
export class SponsorsModule {
}
