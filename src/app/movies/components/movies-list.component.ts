import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { MoviesListService } from '../services';

@Component({
  selector: 'mb-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent implements OnInit {
  
  loading: boolean;
  total: number;
  itemsPerPage: number;
  currentPage: number;
  movies: Observable<Object[]>;
  
  constructor(private moviesListService: MoviesListService) { }

  ngOnInit() {
    this.loadMovies();
  }
  
  loadMovies () {
    this.moviesListService.getMovies().subscribe(
      response => {
        this.total = response.movie_count,
        this.itemsPerPage = response.limit,
        this.currentPage = response.page_number,
        this.movies = Observable.from( [response.movies] )
      },
      err => {
        console.log(err);
    });
  }

}
