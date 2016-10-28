import { Component, OnInit, OnChanges, SimpleChange, Input } from '@angular/core';
import { MovieSuggestionsService } from '../services';

@Component({
  selector: 'mb-movie-suggestions',
  templateUrl: './movie-suggestions.component.html',
  styleUrls: ['./movie-suggestions.component.scss']
})
export class MovieSuggestionsComponent implements OnInit, OnChanges {

  @Input() movieId;
  movies: Object[];

  constructor( private movieSuggestionsService: MovieSuggestionsService) { }

  ngOnInit () {
    this.loadSuggestions();
  }

  ngOnChanges (changes: {[propertyName: string]: SimpleChange}) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(+chng.previousValue > 0);
      console.log(`${propName}: current = ${cur}, previous = ${prev}`);
      // Ignore initial change, but fire on every other change
      if ( propName === 'movieId' && +chng.previousValue > 0) {
        this.loadSuggestions();
      }
    }
  }

  loadSuggestions () {
    this.movieSuggestionsService.getSuggestions(this.movieId)
      .subscribe(
        response => this.movies = response,
        err => console.log(err)
      );
  }

}
