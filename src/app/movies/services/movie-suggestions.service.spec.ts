/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieSuggestionsService } from './movie-suggestions.service';

describe('Service: MovieSuggestions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieSuggestionsService]
    });
  });

  it('should ...', inject([MovieSuggestionsService], (service: MovieSuggestionsService) => {
    expect(service).toBeTruthy();
  }));
});
