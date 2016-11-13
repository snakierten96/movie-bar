import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { IMovie } from '../movie.types';

@Component({
  selector: 'mb-movie-suggestions',
  templateUrl: './movie-suggestions.component.html',
  styleUrls: ['./movie-suggestions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieSuggestionsComponent  {
  @Input() movies: IMovie[];
}
