import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    title: 'Horizonte Blog',
    loadComponent: () =>
      import('@features/blog/pages/home-page/home-page.component').then(
        (module) => module.HomePageComponent
      )
  },
  {
    path: 'post/:slug',
    title: 'Artigo • Horizonte Blog',
    loadComponent: () =>
      import('@features/blog/pages/post-detail-page/post-detail-page.component').then(
        (module) => module.PostDetailPageComponent
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
