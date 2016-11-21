import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { loadImage } from './constants';
import { IMovie } from '../movie.types';
import { MovieDetailCombinedService } from './movie-detail-combined.service';


@Injectable()
export class MovieDetailResolveService implements Resolve<Observable<IMovie>> {

  constructor(private movieDetailCombinedService: MovieDetailCombinedService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IMovie> {

    return this.movieDetailCombinedService.getMovie(route.params['id'])
      .flatMap((movie: IMovie) => {
        let movies = [
          movie.medium_cover_image,
          ...movie.suggestions.map(x => x.medium_cover_image)
        ];

        return Observable.from(movies)
          .flatMap(loadImage)
          .toArray()
          .map(() => movie);
      });
  }

}
