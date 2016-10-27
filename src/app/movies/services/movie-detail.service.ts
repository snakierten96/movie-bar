import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { IMovie } from '../movie.types';

@Injectable()
export class MovieDetailService {

  private movieDetailUrl: string = 'https://yts.ag/api/v2/movie_details.json';

  constructor(private http: Http) { }

  getMovie(id: string) {
    let params : URLSearchParams = new URLSearchParams();
    params.set('movie_id',id);
    params.set('with_images','true');
    params.set('with_cast','true');

    return this.http.get(this.movieDetailUrl,{ search: params })
        .map((res: Response) => <IMovie>res.json().data.movie)
        .catch((err: any) => Observable.throw(err));
  }

}
