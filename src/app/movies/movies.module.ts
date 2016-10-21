import { NgModule }             from '@angular/core';
import { CommonModule }         from '@angular/common';

import {
  MoviesListComponent
} from './components';
import { 
  MoviesListService,
  OMDbService
}    from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MoviesListComponent
  ],
  declarations: [
    MoviesListComponent
  ],
  providers: [
    MoviesListService,
    OMDbService
  ]
})
export class MoviesModule { }
