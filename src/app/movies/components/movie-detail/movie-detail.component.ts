import { Component, OnInit, OnDestroy, ViewEncapsulation,
         ChangeDetectionStrategy, ChangeDetectorRef,
         trigger, state, style, transition, animate } from '@angular/core';
import { Title }          from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { Observable }   from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { IMovie } from '../../movie.types';

@Component({
  selector: 'mb-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations:[
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
  ]
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  movie: IMovie;
  routeData: Subscription;

  constructor(
    private cd: ChangeDetectorRef,
    private titleService : Title,
    private route: ActivatedRoute) { }

  ngOnInit (): void {
    this.routeData = this.route.data.subscribe(
      (data: { movie: IMovie }) => { 
        this.movie = data.movie;
        this.titleService.setTitle([this.movie.title_long,'Movie Bar'].join(" :: "));
        this.cd.markForCheck();
      },
      err => console.error(err)
    );
  }

  ngOnDestroy (): void {
    this.routeData.unsubscribe();
  }

  getGenreTitle (): string  {
    return this.movie.genres.slice(0,2).join(" / ");
  }

}
