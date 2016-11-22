import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { MaterialModule }   from '@angular/material';
import { PaginationModule, TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { 
  MoviesListComponent,
  MovieDetailComponent,
  MovieSuggestionsComponent,
  MovieTechSpecsComponent,
  MoviesListImageDirective
} from './components';
import {
  MoviesListService,
  MoviesListResolveService,
  MovieDetailService,
  MovieDetailCombinedService,
  MovieDetailResolveService,
  MovieSuggestionsService,
  OMDbService
} from './services';

import { moviesRouting } from './movies.routing';

@NgModule({
  imports: [
    CommonModule,
    moviesRouting,
    MaterialModule.forRoot(),
    PaginationModule,
    TabsModule
  ],
  declarations: [
    MoviesListComponent,
    MovieDetailComponent,
    MovieSuggestionsComponent,
    MovieTechSpecsComponent,
    MoviesListImageDirective
  ],
  providers: [
    MoviesListService,
    MoviesListResolveService,
    MovieDetailService,
    MovieDetailCombinedService,
    MovieDetailResolveService,
    MovieSuggestionsService,
    OMDbService
  ]
})
export class MoviesModule { }
