import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';
import { movieDetail } from '../model/dataTypes';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent {
  movieData!: movieDetail;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.fetchDetails(id!);
  }

  fetchDetails(id: string) {
    this.movieService.getMovieDetails(id).subscribe((data) => {
      if (data) {
        this.movieData = data;
        console.log(this.movieData);
      }
    });
  }

  navigateBack(){
    this.router.navigate(['/list']);
  }
}
