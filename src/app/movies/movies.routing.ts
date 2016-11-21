import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent, MovieDetailComponent } from './components';
import { MoviesListResolveService, MovieDetailResolveService } from './services';

const moviesRoutes: Routes = [
  { 
    path: 'browse',
    component: MoviesListComponent,
    resolve: {
      res: MoviesListResolveService
    }    
  },
  { 
    path: 'movie/:id',
    component: MovieDetailComponent,
    resolve: {
      movie: MovieDetailResolveService
    }
  }
];

export const moviesRouting = RouterModule.forChild(moviesRoutes);