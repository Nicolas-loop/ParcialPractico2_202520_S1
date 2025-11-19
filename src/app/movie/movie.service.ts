import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private listUrl =
    'http://157.253.205.147:8080/api/movies';

  private detailBase =
    'http://157.253.205.147:8080/api/movies/1';

  constructor(private http: HttpClient) {}

  listaPeliculas(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.listUrl);
  }

  getMovieDetail(id: number | string): Observable<Movie> {
    const url = `${this.detailBase}/${id}/movie.json`;
    return this.http.get<Movie>(url);
  }

}
