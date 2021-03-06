import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-create',
  templateUrl: '../movie-maint-shared/movie-maint-shared.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
  title: string = "Movie Create";
  movie: Movie = new Movie();

  constructor(private movieSvc: MovieService,
              private router: Router) { }

  ngOnInit() {
  }

  save(): void {
    this.movieSvc.save(this.movie).subscribe(jr => {
      console.log("saved movie...");
      console.log(this.movie);
      this.router.navigateByUrl("/movies/list");
    });
  }

}
