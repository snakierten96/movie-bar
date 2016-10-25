import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDetailService } from '../services';

@Component({
  selector: 'mb-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: Object;

  constructor(
    private movieDetailService : MovieDetailService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.loadMovie(id);
    });
  }

  loadMovie(id: string) {
    this.movieDetailService.getMovie(id).subscribe(
      response => this.movie = response,
      err => console.log(err)
    );
  }

}
