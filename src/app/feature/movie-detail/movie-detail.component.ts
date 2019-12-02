import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  title: string = 'Movie Detail';
  movie: Movie = new Movie();
  id: number = 0;

  constructor(private movieSvc: MovieService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location) { }

  ngOnInit() {
    // get the id from the url
    this.route.params.subscribe(parms => this.id = parms['id']);
    // get the movie from the movie service
    this.movieSvc.get(this.id).subscribe(jr => {
      this.movie = jr.data as Movie;
    });
  }

  delete() {
    this.movieSvc.delete(this.id).subscribe(jr => {
      console.log("movie delete jr:",jr);
      // Sean owes fix here to jr.  we will assume delete was successful
      if (jr.errors != null) {
        console.log("Error deleting movie: "+jr.errors);
      }
      this.router.navigateByUrl("movies/list");
    });
  }

}
