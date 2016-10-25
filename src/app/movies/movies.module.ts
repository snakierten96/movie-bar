import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { MaterialModule }   from '@angular/material';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import { MoviesListComponent, MovieDetailComponent } from './components';
import { MoviesListService, MovieDetailService, OMDbService } from './services';

import { moviesRouting } from './movies.routing';


@NgModule({
  imports: [
    CommonModule,
    moviesRouting,
    MaterialModule.forRoot(),
    PaginationModule
  ],
  exports: [
    MoviesListComponent,
    MovieDetailComponent
  ],
  declarations: [
    MoviesListComponent,
    MovieDetailComponent
  ],
  providers: [
    MoviesListService,
    MovieDetailService,
    OMDbService
  ]
})
export class MoviesModule { }
