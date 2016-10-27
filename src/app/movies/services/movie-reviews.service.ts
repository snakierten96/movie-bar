import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class MovieReviewsService {

  private movieReviewsUrl : string = 'https://yts.ag/api/v2/movie_reviews.json';

  constructor(private http : Http) { }

  getReviews (id: string) : Observable<Object[]> {
    let params : URLSearchParams = new URLSearchParams();
    params.set('movie_id',id);
    return this.http.get(this.movieReviewsUrl,{ search: params })
        .map((res: Response) => res.json().data)
        .catch((err: any) => Observable.throw(err));
  }

}
