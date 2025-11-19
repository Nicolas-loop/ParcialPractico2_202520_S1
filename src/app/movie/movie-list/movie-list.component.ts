import { Component, InjectionToken, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { moviesData } from '../moviesData';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: false,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  selected: Boolean = false;
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService, private router: Router) {}


  onSelect(movie: Movie) {
    this.selectedMovie = movie;
    this.selected = true;
    this.router.navigate(['/movie', movie.id]);

  }

  ngOnInit() {
    this.movieService.listaPeliculas().subscribe((data) => (this.movies = data));

    this.movies = moviesData;
  }
}
  
