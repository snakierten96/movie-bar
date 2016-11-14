/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MoviesListResolveService } from './movies-list-resolve.service';

describe('Service: MovieListResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoviesListResolveService]
    });
  });

  it('should ...', inject([MoviesListResolveService], (service: MoviesListResolveService) => {
    expect(service).toBeTruthy();
  }));
});
