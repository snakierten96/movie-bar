import { Component, Input, ChangeDetectionStrategy,
         trigger, state, style, transition, animate } from '@angular/core';

import { IMovie } from  '../../../movie.types';

@Component({
  selector: 'mb-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.scss'],
  //host: { '[@routeAnimation]': 'true' },
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  ]
})
export class MoviesListItemComponent {
  @Input() movie: IMovie; 
}
