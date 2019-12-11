import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from '../feature/movie-list/movie-list.component';
import { ActorListComponent } from '../feature/actor-list/actor-list.component';
import { CreditListComponent } from '../feature/credit-list/credit-list.component';
import { MovieCreateComponent } from '../feature/movie-create/movie-create.component';
import { MovieEditComponent } from '../feature/movie-edit/movie-edit.component';
import { MovieDetailComponent } from '../feature/movie-detail/movie-detail.component';
import { CreditCreateComponent } from '../feature/credit-create/credit-create.component';
import { CreditEditComponent } from '../feature/credit-edit/credit-edit.component';
import { UserLoginComponent } from '../feature/user-login/user-login.component';
import { WelcomeComponent } from '../feature/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: WelcomeComponent},
  { path: 'movies/list', component: MovieListComponent},
  { path: 'movies/create', component: MovieCreateComponent},
  { path: 'movies/edit/:id', component: MovieEditComponent},
  { path: 'movies/detail/:id', component: MovieDetailComponent},
  { path: 'actors/list', component: ActorListComponent},
  { path: 'credits/list', component: CreditListComponent},
  { path: 'credits/create', component: CreditCreateComponent},
  { path: 'credits/edit/:id', component: CreditEditComponent},
  { path: 'users/login', component: UserLoginComponent},
  { path: '**', component: UserLoginComponent}
  ];
@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
