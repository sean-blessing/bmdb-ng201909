import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.class';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url: string = "http://localhost:8080/movies/";

  constructor(private http: HttpClient) { }
  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }

  save(movie: Movie): Observable<JsonResponse> {
    return this.http.post(this.url, movie) as Observable<JsonResponse>;
  }

}
