import { Injectable } from '@angular/core';
import { 
  Http,
  Response,
  URLSearchParams
} from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class OMDbService {
  
  private omdbServiceUrl: string = 'https://www.omdbapi.com/';

  constructor(private http: Http) { }
  
  getById (id: string) : Observable<any> {
    let params : URLSearchParams = new URLSearchParams();
    params.set("i",id);
    return this.http.get(this.omdbServiceUrl,{ search: params })
             .map((res: Response) => res.json())
             .catch((err: any) => Observable.throw(err));
    
  }

}
