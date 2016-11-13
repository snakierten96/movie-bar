/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieDetailCombinedService } from './movie-detail-combined.service';

describe('Service: MovieDetailCombined', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailCombinedService]
    });
  });

  it('should ...', inject([MovieDetailCombinedService], (service: MovieDetailCombinedService) => {
    expect(service).toBeTruthy();
  }));
});
