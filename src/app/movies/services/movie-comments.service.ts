import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { MOVIE_ID } from './constants';

@Injectable()
export class MovieCommentsService {

  private movieCommentsUrl : string = 'https://yts.ag/api/v2/movie_comments.json';

  constructor(private http : Http) { }

  getComments (id : string) : Observable<Object[]> {
    let params : URLSearchParams = new URLSearchParams();
    params.set(MOVIE_ID, id);
    return this.http.get(this.movieCommentsUrl,{ search: params })
        .map((res: Response) => res.json().data)
        .catch((err: any) => Observable.throw(err));
  }

}
