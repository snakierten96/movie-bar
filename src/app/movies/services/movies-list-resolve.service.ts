import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/concatMap';

import { loadImage } from './constants';
import { IMovie, IMoviesResponse } from '../movie.types';
import { MoviesListService } from './movies-list.service';

@Injectable()
export class MoviesListResolveService implements Resolve<Observable<IMoviesResponse>> {

  constructor(private moviesListService: MoviesListService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IMoviesResponse> {
    return this.moviesListService.getMovies()
      .flatMap((response: IMoviesResponse) => {
        let urlList = response.movies.map(x => x.medium_cover_image);
        return Observable.from(urlList)
          .concatMap(loadImage)
          .toArray()
          .map(images => {
            response.movies = <IMovie[]>response.movies.map((x, idx) => {
              x.medium_cover_image = <string>images[idx];
              return x;
            });
            return response;
          });
      });
  }

}
