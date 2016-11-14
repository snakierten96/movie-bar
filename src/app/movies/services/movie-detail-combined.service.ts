import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { IMovie } from '../movie.types';
import { MovieDetailService } from './movie-detail.service';
import { MovieSuggestionsService } from './movie-suggestions.service';

@Injectable()
export class MovieDetailCombinedService {

  constructor(
    private movieDetailService: MovieDetailService,
    private movieSuggestionsService: MovieSuggestionsService) { }

  getMovie(id: string): Observable<IMovie> {
    return this.movieDetailService.getMovie(id)
      .map((movie: IMovie) => {
        movie.suggestions = this.movieSuggestionsService.getSuggestions(id)
        return movie;
      });
  }

}
