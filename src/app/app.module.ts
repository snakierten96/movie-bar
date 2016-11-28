import { BrowserModule, Title }           from '@angular/platform-browser';
import { NgModule }                       from '@angular/core';
import { FormsModule }                    from '@angular/forms';
import { HttpModule }                     from '@angular/http';
import { MaterialModule, MdIconRegistry } from '@angular/material';

import { applyMiddleware, Store, compose, createStore } from 'redux';
import { NgRedux, NgReduxModule } from 'ng2-redux';
import * as createLogger from 'redux-logger';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies';
import { HomeModule }   from './home';
import { routing, appRoutingProviders } from './app.routing';
import { DynContentComponent } from './dyn-content';
import { IAppState, rootReducer } from './store';

export const store: Store<IAppState> = createStore(
  rootReducer,
  compose(applyMiddleware(createLogger()))
);

@NgModule({
  declarations: [
    AppComponent,
    DynContentComponent
  ],
  entryComponents: [
    DynContentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    NgReduxModule.forRoot(),
    MoviesModule,
    HomeModule
  ],
  providers: [
    Title,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(ngRedux: NgRedux<IAppState>, mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('fontawesome','fa');
    ngRedux.provideStore(store);
  }
      
}
