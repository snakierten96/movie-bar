/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OMDbService } from './omdb.service';

describe('Service: OMDb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OMDbService]
    });
  });

  it('should ...', inject([OMDbService], (service: OMDbService) => {
    expect(service).toBeTruthy();
  }));
});
