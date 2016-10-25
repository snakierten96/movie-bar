import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent }
];

export const homeRouting = RouterModule.forChild(homeRoutes);