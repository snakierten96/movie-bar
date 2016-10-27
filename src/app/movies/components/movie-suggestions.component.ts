import { Component, OnInit, Input } from '@angular/core';
import { MovieSuggestionsService } from '../services';

@Component({
  selector: 'mb-movie-suggestions',
  templateUrl: './movie-suggestions.component.html',
  styleUrls: ['./movie-suggestions.component.scss']
})
export class MovieSuggestionsComponent implements OnInit {

  @Input() movieId;
  movies: Object[];

  constructor( private movieSuggestionsService: MovieSuggestionsService) { }

  ngOnInit() {
    this.movieSuggestionsService.getSuggestions(this.movieId)
      .subscribe(
        response => this.movies = response,
        err => console.log(err)
      );
  }

}
