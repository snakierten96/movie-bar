import { Component, OnInit, ViewEncapsulation,
         ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

import { IMovie } from '../../movie.types';
import { MovieDetailCombinedService } from '../../services';

@Component({
  selector: 'mb-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class MovieDetailComponent implements OnInit {

  movie: IMovie;

  constructor(
    private cd: ChangeDetectorRef,
    private titleService : Title,
    private movieDetailCombinedService: MovieDetailCombinedService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.loadMovie(id);
    });
  }

  loadMovie(id: string) {
    this.movieDetailCombinedService.getMovie(id).subscribe(
      (response : IMovie) => this.movie = response,
      err => console.log(err),
      () => { 
        this.titleService.setTitle([this.movie.title_long,'Movie Bar'].join(" :: "));
        this.cd.markForCheck();
      }
    );
  }

}
