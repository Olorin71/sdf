import {Route} from '@angular/router';


export const routes: Array<Route> = [
  {
    path: '',
    loadChildren: () => import('./markdown/markdown.module').then(m => m.MarkdownModule),
  }
];
