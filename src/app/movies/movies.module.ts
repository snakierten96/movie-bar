import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { MaterialModule }   from '@angular/material';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';

import {
  MoviesListComponent
} from './components';
import { 
  MoviesListService,
  OMDbService
}    from './services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    PaginationModule
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
