import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent, MovieDetailComponent } from './components';

const moviesRoutes: Routes = [
  { path: 'browse',     component: MoviesListComponent },
  { path: 'movie/:id',  component: MovieDetailComponent }
];

export const moviesRouting = RouterModule.forChild(moviesRoutes);