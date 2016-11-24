import { Component, OnInit, OnDestroy,
  ChangeDetectionStrategy,  ChangeDetectorRef, ViewEncapsulation,
  trigger, state, style, transition, animate } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Observable }   from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IMovie, IMoviesResponse } from '../../movie.types';

@Component({
  selector: 'mb-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('routeAnimation', [
      state('*',style({ opacity: 1, transform: 'scale(1)' })),
      transition(':enter', [ 
        style({ 
          opacity: 0, 
          transform: 'scale(.95)'
        }), 
        animate('1s ease-in')
      ]),
      transition(':leave', [
        animate('1s ease-out', style({
          opacity: 0,
          transform: 'scale(.95)'
        }))
      ])
    ])
  ],
})
export class MoviesListComponent implements OnInit, OnDestroy {

  routeData: Subscription;

  total: number;
  itemsPerPage: number;
  currentPage: number;
  movies: IMovie[];
  
  constructor(
    private titleService: Title,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeData = this.route.data.subscribe(
      (data: { res: IMoviesResponse } ) => {
        this.total = data.res.movie_count;
        this.itemsPerPage = data.res.limit;
        this.currentPage = data.res.page_number;
        this.movies = data.res.movies;

        this.titleService.setTitle(`Browse :: Movie Bar - Page : ${this.currentPage}`);
        this.cd.markForCheck();
      },
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    this.routeData.unsubscribe();
  } 

}
