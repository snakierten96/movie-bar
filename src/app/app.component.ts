import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event, NavigationStart, 
         NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Overlay, OverlayRef, OverlayState, OVERLAY_PROVIDERS } from '@angular/material';

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

  constructor(private router: Router, private titleService: Title, private _overlay: Overlay) {
    this.titleService.setTitle(this.title);
    router.events.subscribe((event: Event) => this._navigationInterceptor(event));
  }

  private _navigationInterceptor(event: Event): void {

    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof (NavigationEnd || NavigationCancel || NavigationError)) {
      this.loading = false;
    }

  }
  
  private _getOverlayState (): OverlayState {
    let state = new OverlayState();
    
    state.hasBackdrop = true;
    state.positionStrategy = this._overlay.position()
        .global()
        .centerHorizontally()
        .centerVertically();
        
    return state;
  }
  
  private _createOverlay (): OverlayRef {
    let overlayState = this._getOverlayState();
    return this._overlay.create(overlayState);
  }

}
