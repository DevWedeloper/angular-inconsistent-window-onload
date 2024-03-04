import { Routes } from '@angular/router';
import { NonLazyLoadComponent } from './non-lazy-load/non-lazy-load.component';

export const routes: Routes = [
  {
    path: 'non-lazy-load',
    component: NonLazyLoadComponent,
  },
  {
    path: 'lazy-load',
    loadComponent: () =>
      import('./lazy-load/lazy-load.component').then(
        (m) => m.LazyLoadComponent
      ),
  },
  {
    path: '',
    redirectTo: 'non-lazy-load',
    pathMatch: 'full',
  },
];
