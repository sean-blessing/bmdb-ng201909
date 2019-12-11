import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';
import { User } from '../model/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(): Observable<JsonResponse> {
    let u: User = new User('bmarley','bigdoobie','Bob',
      'Marley',true, true);
    let jr: JsonResponse = new JsonResponse(u,null,null);
    return Observable.create(jr);
  }

}
