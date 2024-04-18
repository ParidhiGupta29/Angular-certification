import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { http,HttpResponse } from 'msw';
import { movieDetail, Movies } from './model/dataTypes';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(){
    return this.http.get<Movies[]>('/movies')
  }

  getMovieDetails(id: string){
    return this.http.get<movieDetail>('/movies/'+ id);
  }

}
