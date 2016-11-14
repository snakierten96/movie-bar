import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { IMoviesResponse } from '../movie.types';
import { MoviesListService } from './movies-list.service';

@Injectable()
export class MoviesListResolveService implements Resolve<Observable<IMoviesResponse>> {

  constructor(private moviesListService: MoviesListService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IMoviesResponse> {
    return this.moviesListService.getMovies();
  }

}
