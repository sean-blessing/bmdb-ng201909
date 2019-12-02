import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie.class';
import { MovieService } from 'src/app/service/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  title: string = "Movie Edit";
  movie: Movie = new Movie();
  id: number = 0;
  
  constructor(private movieSvc: MovieService,
              private router: Router,
              private route: ActivatedRoute,
              private loc: Location) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.movieSvc.get(this.id).subscribe(jr => {
      this.movie = jr.data as Movie;
    });
  }

  save(): void {
    this.movieSvc.save(this.movie).subscribe(jr => {
      console.log("edited movie...");
      console.log(this.movie);
      this.router.navigateByUrl("/movies/list");
    });
  }

  backClicked() {
    this.loc.back();
  }
}
