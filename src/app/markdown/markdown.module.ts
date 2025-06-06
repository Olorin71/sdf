import {NgModule} from '@angular/core';
import {MarkdownComponent} from './markdown.component';
import {MarkdownModule as NgxMarkdownModule} from 'ngx-markdown';
import {CommonModule} from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {SponsorsModule} from '../shared/sponsors/sponsors.module';
import {FlexLayoutModule} from '@angular/flex-layout';

const markdownRoutes: Array<Route> = [
  {
    path: ':page',
    component: MarkdownComponent
  },
  {
    path: '**',
    component: MarkdownComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(markdownRoutes),
    NgxMarkdownModule.forRoot(),
    FlexLayoutModule,
    SponsorsModule
  ],
  declarations: [
    MarkdownComponent
  ]
})
export class MarkdownModule {
}
