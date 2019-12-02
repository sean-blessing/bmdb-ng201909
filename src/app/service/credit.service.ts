import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonResponse } from '../model/json-response.class';
import { Observable } from 'rxjs';
import { Credit } from '../model/credit.class';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  url: string = "http://localhost:8080/credits/";

  constructor(private http: HttpClient) { }

  list(): Observable<JsonResponse> {
    return this.http.get(this.url) as Observable<JsonResponse>;
  }

  get(id: number): Observable<JsonResponse> {
    return this.http.get(this.url+id) as Observable<JsonResponse>;
  }

  save(credit: Credit): Observable<JsonResponse> {
    return this.http.post(this.url, credit) as Observable<JsonResponse>;
  }

  delete(id: number): Observable<JsonResponse> {
    return this.http.delete(this.url+id) as Observable<JsonResponse>;
  }

}
