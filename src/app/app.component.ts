import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event, NavigationStart, 
         NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Overlay, OverlayState, OverlayRef, Portal, ComponentPortal } from '@angular/material';

//import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/distinctUntilChanged';

import { DynContentComponent } from './dyn-content';

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private title: string = "Movie Bar";
  loadingState: Subject<boolean> = new Subject<boolean>();

  navItems: Object[] = [
    { path: ['/'], description: 'Home', icon: 'home' },
    { path: ['/', 'browse'], description: 'Browse Movies', icon: 'camera_roll' },
    { path: ['/', 'movie'], description: 'Movie Detail', icon: 'fingerprint' }
  ];

  constructor ( private router: Router, private titleService: Title,
    private _overlay: Overlay) {

    let overlayRef = this._createOverlay();
    let portal = new ComponentPortal(DynContentComponent);
    this.loadingState.next(true);

    this.titleService.setTitle(this.title);
    router.events.subscribe((event: Event) => this._navigationInterceptor(event));
    this.loadingState.distinctUntilChanged().subscribe((loading) => {
      if (loading) {
        overlayRef.attach(portal);
      } else {
        overlayRef.detach();
      }
    })

  }

  private _navigationInterceptor (event: Event): void {

    if (event instanceof NavigationStart) {
      this.loadingState.next(true);
    }
    if (event instanceof (NavigationEnd || NavigationCancel || NavigationError)) {
      this.loadingState.next(false);
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

  private _createOverlay (): OverlayRef {
    let overlayState = this._getOverlayState();
    return this._overlay.create(overlayState);
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

}
