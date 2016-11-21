import { BrowserModule, Title }           from '@angular/platform-browser';
import { NgModule }                       from '@angular/core';
import { FormsModule }                    from '@angular/forms';
import { HttpModule }                     from '@angular/http';
import { MaterialModule, MdIconRegistry } from '@angular/material';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies';
import { HomeModule }   from './home';
import { routing, appRoutingProviders } from './app.routing';
import { DynContentComponent } from './dyn-content';

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

  constructor(mdIconRegistry: MdIconRegistry) {
    mdIconRegistry.registerFontClassAlias('fontawesome','fa');
  }
      
}
