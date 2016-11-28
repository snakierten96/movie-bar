import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '../store';

@Injectable()
export class LoadingActions {
  constructor(private ngRedux: NgRedux<IAppState>) { }

  static LOADING: boolean = true;
  static LOADED: boolean = false;

  isLoading(): void {
    this.ngRedux.dispatch({ type: LoadingActions.LOADING });
  }

  isLoaded(): void {
    this.ngRedux.dispatch({ type: LoadingActions.LOADED });
  }

}