import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMovie } from '../movie.types';
import { MOVIE_ID, WITH_IMAGES, WITH_CAST, TRUE } from './constants';

@Injectable()
export class MovieDetailService {

  private movieDetailUrl: string = 'https://yts.ag/api/v2/movie_details.json';

  constructor(private http: Http) { }

  getMovie(id: string): Observable<IMovie> {
    let params : URLSearchParams = new URLSearchParams();
    params.set(MOVIE_ID,id);
    params.set(WITH_IMAGES,TRUE);
    params.set(WITH_CAST,TRUE);

    return this.http.get(this.movieDetailUrl,{ search: params })
        .map((res: Response) => <IMovie>res.json().data.movie)
        .catch((err: any) => Observable.throw(err));
  }

}
