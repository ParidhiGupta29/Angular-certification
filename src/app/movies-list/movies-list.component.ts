import { CommonModule, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Movies } from '../model/dataTypes';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [FormsModule , CommonModule],
  providers: [
    HttpClientModule
  ],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css'
})
export class MoviesListComponent {

  filterName: string = '';
  filterYear!: number;

  public movieData!: Movies[];

  filteredData!: Movies[];

  movieArray =[];

  constructor(public router: Router, public movieService: MovieService) {}
  ngOnInit() {
   this.fetchData();
  }

  fetchData(){
    this.movieService.getMovies().subscribe(
         (movie) => {
        this.movieData = movie ;
        this.filteredData = this.movieData;
    } , error =>{console.error('Error')      
    });   
  }

  onChange(event) {
    const value = event?.target?.value; 
    this.filteredData = this.movieData.filter(
      element => (element.title.toLowerCase().includes(value.toLowerCase()) || element.release_date.indexOf(value) > -1));

  }

  selectedMovie(id:string){
    this.router.navigate([`/list/${id}`]);
    console.log(id);
  }

}
