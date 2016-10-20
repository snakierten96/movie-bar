/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieDetailService } from './movie-detail.service';

describe('Service: MovieDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailService]
    });
  });

  it('should ...', inject([MovieDetailService], (service: MovieDetailService) => {
    expect(service).toBeTruthy();
  }));
});
