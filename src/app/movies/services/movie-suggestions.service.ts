import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MOVIE_ID } from './constants';
import { IMovie } from '../movie.types';

@Injectable()
export class MovieSuggestionsService {

  private movieSuggestionsUrl: string = 'https://yts.ag/api/v2/movie_suggestions.json';

  constructor(private http: Http) { }

  getSuggestions (id: string): Observable<IMovie> {
    let params : URLSearchParams = new URLSearchParams();
    params.set(MOVIE_ID,id);

    return this.http.get(this.movieSuggestionsUrl,{ search: params })
      .flatMap((res: Response) => Observable.from(res.json().data.movies))
      .catch((err: any) => Observable.throw(err));
  }

}
