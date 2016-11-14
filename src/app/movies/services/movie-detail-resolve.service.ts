import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { IMovie } from '../movie.types';
import { MovieDetailCombinedService } from './movie-detail-combined.service';

@Injectable()
export class MovieDetailResolveService implements Resolve<Observable<IMovie>> {

  constructor(private movieDetailCombinedService: MovieDetailCombinedService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IMovie> {
    return this.movieDetailCombinedService.getMovie(route.params['id']);
  }

}
