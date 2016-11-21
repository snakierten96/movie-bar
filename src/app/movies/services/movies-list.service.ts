import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { PAGE, LIMIT } from './constants';
import { IMoviesResponse } from '../movie.types';

@Injectable()
export class MoviesListService {
    
  private moviesListUrl: string = 'https://yts.ag/api/v2/list_movies.json';
  //private moviesListUrl: string = '/assets/list_movies.json';
  
  constructor(private http: Http) { }
  
  getMovies (page: number = 1, items: number = 50): Observable<IMoviesResponse> {
    let params: URLSearchParams = new URLSearchParams();
    params.set(PAGE,`${page}`);
    params.set(LIMIT, `${items}`);
    return this.http.get(this.moviesListUrl,{ search: params })
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  
  private extractData (res: Response) {
    let body = res.json();
    return body.data || {};
  }
  
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server Error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
