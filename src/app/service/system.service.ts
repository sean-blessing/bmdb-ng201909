import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User = null;

  constructor(private router: Router) { }

  isAdmin(): boolean { 
    return (this.loggedInUser == null) ? false : this.loggedInUser.isAdmin;
  }
  isReviewer(): boolean { 
    return (this.loggedInUser == null) ? false : this.loggedInUser.isReviewer;
  }
  checkLogin(): void {
    if(this.loggedInUser == null) {
      this.router.navigateByUrl("/movies/list");
    }
  }

}
