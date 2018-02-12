import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouteReuseStrategy, RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {CustomReuseStrategy} from './app.reuse-strategy';


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatToolbarModule,
		MatSidenavModule,
		FlexLayoutModule,
		RouterModule.forRoot(routes)
	],
	providers: [
		{provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
