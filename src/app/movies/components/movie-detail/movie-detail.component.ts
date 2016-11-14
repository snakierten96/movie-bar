import { Component, OnInit, OnDestroy, ViewEncapsulation,
         ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent implements OnInit, OnDestroy {

  movie: IMovie;
  routeData: Subscription;

  constructor(
    private cd: ChangeDetectorRef,
    private titleService : Title,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeData = this.route.data.subscribe(
      (data: { movie: IMovie }) => { 
        this.movie = data.movie;
        this.titleService.setTitle([this.movie.title_long,'Movie Bar'].join(" :: "));
        this.cd.markForCheck();
      },
      err => console.error(err)
    );
  }

  ngOnDestroy(): void {
    console.log('leave detail');
    this.routeData.unsubscribe();
  }

}
