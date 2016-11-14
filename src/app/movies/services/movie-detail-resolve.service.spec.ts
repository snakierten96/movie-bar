/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieDetailResolveService } from './movie-detail-resolve.service';

describe('Service: MovieDetailResolve', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieDetailResolveService]
    });
  });

  it('should ...', inject([MovieDetailResolveService], (service: MovieDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
