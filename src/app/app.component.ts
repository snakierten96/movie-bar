import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  private title: string = "Movie Bar";

  navItems: Object[] = [
    { path: ['/'], description: 'Home', icon: 'home' },
    { path: ['/', 'browse'], description: 'Browse Movies', icon: 'camera_roll' },
    { path: ['/', 'movie'], description: 'Movie Detail', icon: 'fingerprint' }
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
