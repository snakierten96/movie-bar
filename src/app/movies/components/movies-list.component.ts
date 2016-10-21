import { Component, OnInit } from '@angular/core';

import { MoviesListService } from '../services';

@Component({
  selector: 'mb-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  
  response: any;

  constructor(private moviesListService: MoviesListService) { }

  ngOnInit() {
    this.loadMovies();
  }
  
  loadMovies () {
    this.moviesListService.getMovies().subscribe(
      response => this.response = response,
      err => {
        console.log(err);
    });
  }

}
