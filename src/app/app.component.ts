import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event, NavigationStart, 
         NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private title: string = "Movie Bar";
  loading: boolean = true;

  navItems: Object[] = [
    { path: ['/'], description: 'Home', icon: 'home' },
    { path: ['/', 'browse'], description: 'Browse Movies', icon: 'camera_roll' },
    { path: ['/', 'movie'], description: 'Movie Detail', icon: 'fingerprint' }
  ];

  constructor(private router: Router, private titleService: Title) {
    this.titleService.setTitle(this.title);
    router.events.subscribe((event: Event) => this.navigationInterceptor(event));
  }

  navigationInterceptor(event: Event): void {

    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof (NavigationEnd || NavigationCancel || NavigationError)) {
      this.loading = false;
    }

  }

}
