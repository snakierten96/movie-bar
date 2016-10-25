import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { homeRouting } from './home.routing';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    homeRouting,
    MaterialModule.forRoot()
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
