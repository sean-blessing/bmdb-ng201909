import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from '../feature/movie-list/movie-list.component';
import { ActorListComponent } from '../feature/actor-list/actor-list.component';
import { CreditListComponent } from '../feature/credit-list/credit-list.component';
import { MovieCreateComponent } from '../feature/movie-create/movie-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MovieListComponent},
  { path: 'movies/list', component: MovieListComponent},
  { path: 'movies/create', component: MovieCreateComponent},
  { path: 'actors/list', component: ActorListComponent},
  { path: 'credits/list', component: CreditListComponent},
  { path: '**', component: MovieListComponent}
  ];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
