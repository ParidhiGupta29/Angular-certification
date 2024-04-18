import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

export const routes: Routes = [
    { path: 'list', component: MoviesListComponent },
    { path: '',   redirectTo: 'list', pathMatch: 'full' },
    { path: 'list/:id', component: MovieDetailsComponent },
];
