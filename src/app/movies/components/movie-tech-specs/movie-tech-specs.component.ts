import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mb-movie-tech-specs',
  templateUrl: './movie-tech-specs.component.html',
  styleUrls: ['./movie-tech-specs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MovieTechSpecsComponent {

  @Input() torrents : Object[];
  @Input() language : string;
  
  constructor() { }

}
