import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieListComponent } from './feature/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './pipe/sort.pipe';
import { ActorListComponent } from './feature/actor-list/actor-list.component';
import { CreditListComponent } from './feature/credit-list/credit-list.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MenuComponent } from './core/menu/menu.component';
import { BaseComponent } from './feature/base/base.component';
import { MovieCreateComponent } from './feature/movie-create/movie-create.component';
import { MovieEditComponent } from './feature/movie-edit/movie-edit.component';
import { MovieDetailComponent } from './feature/movie-detail/movie-detail.component';
import { CreditCreateComponent } from './feature/credit-create/credit-create.component';
import { CreditEditComponent } from './feature/credit-edit/credit-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SortPipe,
    ActorListComponent,
    CreditListComponent,
    MenuComponent,
    BaseComponent,
    MovieCreateComponent,
    MovieEditComponent,
    MovieDetailComponent,
    CreditCreateComponent,
    CreditEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
