import { Component, OnInit, OnDestroy,
  ChangeDetectionStrategy,  ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable }   from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IMovie, IMoviesResponse } from '../../movie.types';

@Component({
  selector: 'mb-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MoviesListComponent implements OnInit, OnDestroy {
  
  loading: boolean;
  routeData: Subscription;

  total: number;
  itemsPerPage: number;
  currentPage: number;
  movies: IMovie[];
  
  constructor(
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeData = this.route.data.subscribe(
      (data: { res: IMoviesResponse } ) => {
        this.total = data.res.movie_count;
        this.itemsPerPage = data.res.limit;
        this.currentPage = data.res.page_number;
        this.movies = data.res.movies;
        this.cd.markForCheck();
      },
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.routeData.unsubscribe();
  } 

}
