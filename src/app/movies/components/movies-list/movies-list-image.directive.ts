import { Directive, HostListener, ViewContainerRef } from '@angular/core';

import { IMovie } from '../../movie.types';

@Directive({
  selector: '[mbMoviesListImage]',
  inputs: ['mbMoviesListImage']
})
export class MoviesListImageDirective {
  
  movie: IMovie;
  status: string = "out";

  constructor(private viewContainer: ViewContainerRef) { }
  
  set mbMoviesListImage(movie: IMovie) {
    this.movie = movie;
  }
  
  @HostListener('mouseenter') onMouseEnter() {
    console.log('entered');
    this.status = "in";
    console.log(this.movie.title);
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    console.log('left');
    this.status = "out";
  }

}
