/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieCommentsService } from './movie-comments.service';

describe('Service: MovieComments', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieCommentsService]
    });
  });

  it('should ...', inject([MovieCommentsService], (service: MovieCommentsService) => {
    expect(service).toBeTruthy();
  }));
});
